import React, { useReducer, useState } from 'react';
import { LockOutlined, Shield, Person } from '@mui/icons-material';
import {
  Stack,
  Typography,
  Avatar,
  Paper,
  TextField,
  Button,
  Badge,
  Link,
} from '@mui/material';
import { Container } from '@mui/system';
import { Link as RouterLink } from 'react-router-dom';
import { signUp } from '../firebase';

const InitialFormInputsState = {
  emailValue: null,
  emailIsValid: false,
  passwordValue: null,
  passwordIsValid: false,
  rePasswordValue: null,
  rePasswordIsValid: false,
};
const isFormValidReducer = (state, action) => {
  switch (action.type) {
    case 'email':
      if (action.value.includes('@')) {
        return { ...state, emailValue: action.value, emailIsValid: true };
      } else {
        return { ...state, emailValue: action.value, emailIsValid: false };
      }
    case 'password':
      if (action.value.length > 5) {
        if (action.value === state.rePasswordValue) {
          return {
            ...state,
            rePasswordIsValid: true,
            passwordValue: action.value,
            passwordIsValid: true,
          };
        }
        return {
          ...state,
          rePasswordIsValid: false,
          passwordValue: action.value,
          passwordIsValid: true,
        };
      }
      if (action.value === state.rePasswordValue) {
        return {
          ...state,

          rePasswordIsValid: true,
          passwordValue: action.value,
          passwordIsValid: false,
        };
      }
      return {
        ...state,

        rePasswordIsValid: false,
        passwordValue: action.value,
        passwordIsValid: false,
      };

    case 'rePassword':
      console.log(action.value, state.passwordValue);
      if (action.value === state.passwordValue) {
        return {
          ...state,
          rePasswordValue: action.value,
          rePasswordIsValid: true,
        };
      }
      return {
        ...state,
        rePasswordValue: action.value,
        rePasswordIsValid: false,
      };

    default:
      return;
  }
};
const Signup = () => {
  const [signUpMethod, setSignUpMethod] = useState('emailAndPassword');

  const [formInputsState, dispatcher] = useReducer(
    isFormValidReducer,
    InitialFormInputsState
  );

  const formHandler = (e) => {
    e.preventDefault();
    signUp(
      formInputsState.emailValue,
      formInputsState.passwordValue,
      signUpMethod
    );
  };
  const emailChangeHandler = (e) => {
    dispatcher({ type: 'email', value: e.target.value });
  };
  const PasswordChangeHandler = (e) => {
    dispatcher({ type: 'password', value: e.target.value });
  };
  const rePasswordChangeHandler = (e) => {
    dispatcher({ type: 'rePassword', value: e.target.value });
  };
  const isFormValid =
    formInputsState.emailIsValid &&
    formInputsState.passwordIsValid &&
    formInputsState.rePasswordIsValid;

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Paper elevation={3} sx={{ width: '100%', p: [4, 8] }}>
        <Stack sx={{ alignItems: 'center', gap: 2 }}>
          <Badge
            sx={{
              '& .MuiBadge-badge': {
                top: '50%',
                left: '50%',
                color: 'secondary.contrastText',
              },
            }}
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            badgeContent={<Person />}
          >
            <Shield sx={{ fontSize: '50px', color: 'secondary.light' }} />
          </Badge>

          <Typography variant="h5" component="h1">
            Sign Up
          </Typography>
          <Stack
            component="form"
            onSubmit={formHandler}
            noValidate
            sx={{ width: '100%', gap: 2 }}
          >
            <TextField
              fullWidth
              variant="standard"
              id="newEmail"
              name="newEmail"
              label="Enter Your Email"
              placeholder="Enter a valid email"
              type="email"
              onChange={emailChangeHandler}
            />
            <TextField
              fullWidth
              variant="standard"
              id="newPassword"
              name="newPassword"
              placeholder="Enter 6 or more digits"
              label="Enter Your Password"
              type="password"
              onChange={PasswordChangeHandler}
            />
            <TextField
              fullWidth
              variant="standard"
              id="newRePassword"
              name="newRePassword"
              placeholder="Enter same password"
              label="Enter Your Password"
              type="password"
              onChange={rePasswordChangeHandler}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={!isFormValid}
            >
              Sign Up
            </Button>
          </Stack>
          <Link to="/login" component={RouterLink}>
            I have an exisiting account
          </Link>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Signup;
