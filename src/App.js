import { Route, Routes, Navigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import { monitorAutState } from './firebase';
import { useContext } from 'react';
import AuthContext from './context/AuthContext';

function App() {
  const authCTX = useContext(AuthContext);

  return (
    <div className="App" style={{ height: '100vh' }}>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              authCTX.isAuthanticated ? <Home /> : <Navigate to="login" />
            }
          />
        </Route>
        <Route path="/" />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
