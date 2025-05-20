import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import HomePage from '../pages/HomePage';
import LoginPage from '../features/auth/pages/LoginPage';
import RegisterPage from '../features/auth/pages/RegisterPage';
import NotFoundPage from '../pages/NotFoundPage';
import AuthGuard from '../guards/AuthGuard';

// Ejemplos de futuras páginas protegidas
// import UsersListPage from '../features/users/pages/UsersListPage';
// import UserProfilePage from '../features/users/pages/UserProfilePage';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {/* 🔓 Rutas públicas */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* 🔐 Rutas protegidas bajo AuthGuard y MainLayout */}
      <Route
        path="/"
        element={
          <AuthGuard>
            <MainLayout />
          </AuthGuard>
        }
      >
        {/* Las siguientes rutas se renderizan dentro del <Outlet /> de MainLayout */}

        {/* Redirección automática de / a /dashboard */}
        <Route index element={<Navigate to="/dashboard" replace />} />
        
        {/* Página principal del sistema */}
        <Route path="dashboard" element={<HomePage />} />

        {/* Ejemplos para futuros módulos */}
        {/* <Route path="usuarios" element={<UsersListPage />} /> */}
        {/* <Route path="usuarios/nuevo" element={<div>Crear Usuario Page</div>} /> */}
        {/* <Route path="usuarios/:userId" element={<UserProfilePage />} /> */}
        {/* <Route path="productos" element={<div>Productos Page</div>} /> */}
        {/* <Route path="clientes" element={<div>Clientes Page</div>} /> */}
      </Route>

      {/* ❌ Página no encontrada */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
