// src/features/auth/pages/RegisterPage.tsx
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import RegisterForm from '../components/RegisterForm'; // Asegúrate de tener este componente creado

const RegisterPage: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 64px)', // Ajusta según tu layout
        p: 3,
      }}
    >
      <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: 480 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          textAlign="center"
          sx={{ mb: 3 }}
        >
          Registro de Nuevo Usuario
        </Typography>
        <RegisterForm />
      </Paper>
    </Box>
  );
};

export default RegisterPage;
