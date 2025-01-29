import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem('token'));
  const [user, setUser] = useState(() => {
    // Retrieve user data from localStorage if available
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        setIsLoggedIn(true);
        setUser(data.user);
        // Store user info in localStorage for persistence across sessions
        localStorage.setItem('user', JSON.stringify(data.user));
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Login failed:', error.message);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');  // Remove user data from localStorage
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
