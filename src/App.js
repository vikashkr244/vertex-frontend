import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider
import { CartProvider } from './context/CartContext'; // Import CartProvider
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import ClientDashboard from './clientdashboard/ClientDashboard';
import DashboardOverview from './clientdashboard/DashboardOverview';
import ProductCatalog from './clientdashboard/ProductCatalog';
import Customization from './clientdashboard/Customization';
import CartPage from './clientdashboard/CartPage';
import OrderSummary from './clientdashboard/OrderSummary';
import Payment from './clientdashboard/Payment';
import OrderHistory from './clientdashboard/OrderHistory';
import Support from './clientdashboard/Support';
import AccountSettings from './clientdashboard/AccountSettings';
import PrivateRoute from './components/PrivateRoute'; // Private Route component
import Profile from './clientdashboard/Profile';

function App() {
  return (
    <AuthProvider> {/* Wrap the app with AuthProvider */}
      <CartProvider> {/* Wrap the app with CartProvider */}
        <Router>
          <Routes>
            {/* Public routes */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Route>

            {/* Private Dashboard routes */}
            <Route element={<DashboardLayout />}>
              <Route
                path="/dashboard"
                element={<PrivateRoute><ClientDashboard /></PrivateRoute>} // Secure route with PrivateRoute
              />
              <Route
                path="/dashboard/overview"
                element={<PrivateRoute><DashboardOverview /></PrivateRoute>}
              />
              <Route
                path="/dashboard/catalog"
                element={<PrivateRoute><ProductCatalog /></PrivateRoute>}
              />
              <Route
                path="/dashboard/profile"
                element={<PrivateRoute><Profile /></PrivateRoute>}
              />
              <Route
                path="/dashboard/customization"
                element={<PrivateRoute><Customization /></PrivateRoute>}
              />
              <Route
                path="/dashboard/cart"
                element={<PrivateRoute><CartPage /></PrivateRoute>}
              />
              <Route
                path="/dashboard/ordersummary"
                element={<PrivateRoute><OrderSummary /></PrivateRoute>}
              />
              <Route
                path="/dashboard/payment"
                element={<PrivateRoute><Payment /></PrivateRoute>}
              />
              <Route
                path="/dashboard/orderhistory"
                element={<PrivateRoute><OrderHistory /></PrivateRoute>}
              />
              <Route
                path="/dashboard/support"
                element={<PrivateRoute><Support /></PrivateRoute>}
              />
              <Route
                path="/dashboard/account"
                element={<PrivateRoute><AccountSettings /></PrivateRoute>}
              />
            </Route>
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;

