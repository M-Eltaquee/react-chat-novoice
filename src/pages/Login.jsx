import { LockOutlined } from '@mui/icons-material';
import {
  Container,
  Stack,
  Typography,
  Avatar,
  Paper,
  TextField,
  Button,
  Link,
} from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';
const Login = () => {
  const formHandler = (e) => {
    e.preventDefault();
    console.log('dd');
  };
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
          <Avatar sx={{ backgroundColor: 'secondary.main' }}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h5" component="h1">
            Sign In
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
              id="userEmail"
              name="userEmail"
              label="Your Email"
              type="email"
            />
            <TextField
              fullWidth
              variant="standard"
              id="userPassword"
              name="userPassword"
              label="Your Password"
              type="password"
            />
            <Button type="submit" fullWidth variant="contained">
              Sign In
            </Button>
          </Stack>

          <Link to="/signup" component={RouterLink}>
            I don't have an exisiting account
          </Link>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Login;
