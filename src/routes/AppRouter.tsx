import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import HomePage from '../pages/HomePage';
import LoginPage from '../features/auth/pages/LoginPage';
import RegisterPage from '../features/auth/pages/RegisterPage';
import NotFoundPage from '../pages/NotFoundPage';
import AuthGuard from '../guards/AuthGuard';
import CustomerPage from '../pages/CustomerPage';
import SuppliersPage from '../pages/SuppliersPage';
import ProductsPage from '../pages/ProductsPage';
import SuppliesPage from '../pages/SuppliesPage';
import SalesOrdersPage from '../pages/SalesOrdersPage';
import PurchaseOrdersPage from '../pages/PurchaseOrdersPage';
import ProductionOrdersPage from '../pages/ProductionOrdersPage';
import InventoryProductsPage from '../pages/InventoryProductsPage';
import InventorySuppliesPage from '../pages/InventorySuppliesPage';
import PaymentsPage from '../pages/PaymentsPage';
import UsersPage from '../pages/UsersPage';
import EmployeesPage from '../pages/EmployeesPage';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {/* 🔓 Public routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* 🔐 Protected routes */}
      <Route
        path="/"
        element={
          <AuthGuard>
            <MainLayout />
          </AuthGuard>
        }
      >
        {/* Default redirection */}
        <Route index element={<Navigate to="/dashboard" replace />} />

        {/* Main Dashboard */}
        <Route path="dashboard" element={<HomePage />} />

        {/* 📦 Productos e insumos */}
        <Route path="products" element={<ProductsPage />} />
        <Route path="supplies" element={<SuppliesPage />} />
        <Route path="inventory-products" element={<InventoryProductsPage />} />
        <Route path="inventory-supplies" element={<InventorySuppliesPage />} />

        {/* Pages */}
        <Route path="customers" element={<CustomerPage />} />
        <Route path="suppliers" element={<SuppliersPage />} />
        <Route path="sales-orders" element={<SalesOrdersPage />} />
        <Route path="purchase-orders" element={<PurchaseOrdersPage />} />
        <Route path="production-orders" element={<ProductionOrdersPage />} />
        <Route path="payments" element={<PaymentsPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="employees" element={<EmployeesPage />} />
      </Route>

      {/* ❌ 404 Not Found */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
