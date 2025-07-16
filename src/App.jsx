import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Button, Typography
} from '@mui/material';
import AdminPage from './pages/AdminPage';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const correctPassword = 'Z9v#3LtQ8x!rBn7@PfWc2Km$sYdE6^tA';

  const handleLogin = () => {
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      setError('Wrong password. Try again.');
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <AdminPage />
            ) : (
              <>
                <Dialog open fullWidth maxWidth="xs">
                  <DialogTitle>Enter Admin Password</DialogTitle>
                  <DialogContent>
                    <TextField
                      autoFocus
                      margin="dense"
                      label="Password"
                      type="password"
                      fullWidth
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setError('');
                      }}
                    />
                    {error && (
                      <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                        {error}
                      </Typography>
                    )}
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleLogin} variant="contained">Submit</Button>
                  </DialogActions>
                </Dialog>
              </>
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
