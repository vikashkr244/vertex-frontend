// DashboardLayout.js
import React, { useState, useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import ClientNavbar from '../clientdashboard/ClientNavbar';
import Sidebar from '../clientdashboard/Sidebar';
import './DashboardLayout.css';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="dashboard-layout">
      <ClientNavbar onToggleSidebar={toggleSidebar} />
      <div className="dashboard-body">
        <div ref={sidebarRef} className={`sidebar-container ${isSidebarOpen ? 'open' : ''}`}>
          {isSidebarOpen && <Sidebar />}
        </div>
        <main className={`main-content ${isSidebarOpen ? 'shifted' : ''}`}>
          <Outlet /> {/* Render child routes */}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
