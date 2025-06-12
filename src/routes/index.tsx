import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ROUTES } from '../constants';

// Pages
import { HomePage } from '../pages/Home';
import { ProductsPage } from '../pages/Products';
import { ProductDetailsPage } from '../pages/ProductDetails';
import { CartPage } from '../pages/Cart';
import { CheckoutPage } from '../pages/Checkout';
import { LoginPage } from '../pages/Auth/Login';
import { RegisterPage } from '../pages/Auth/Register';
import { DashboardPage } from '../pages/Dashboard';
import { NotFoundPage } from '../pages/404';
import { UnderMaintenancePage } from '../pages/UnderMaintenance';

interface PrivateRouteProps {
  children: React.ReactNode;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const { user } = useAuth();
  return user ? <>{children}</> : <Navigate to={ROUTES.LOGIN} />;
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />
      <Route path={ROUTES.PRODUCT_DETAILS} element={<ProductDetailsPage />} />
      <Route path={ROUTES.CART} element={<CartPage />} />
      <Route
        path={ROUTES.CHECKOUT}
        element={
          <PrivateRoute>
            <CheckoutPage />
          </PrivateRoute>
        }
      />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route
        path={ROUTES.DASHBOARD}
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />
      <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
      <Route path={ROUTES.MAINTENANCE} element={<UnderMaintenancePage />} />
      <Route path="*" element={<Navigate to={ROUTES.NOT_FOUND} replace />} />
    </Routes>
  );
}