// src/features/auth/pages/LoginPage.tsx
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import LoginForm from '../components/LoginForm'; // Asegúrate de que este componente existe

const LoginPage: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 64px)', // Ajusta si hay un header
        p: 3,
      }}
    >
      <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: 450 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          textAlign="center"
          sx={{ mb: 3 }}
        >
          Iniciar Sesión
        </Typography>
        <LoginForm />
      </Paper>
    </Box>
  );
};

export default LoginPage;
