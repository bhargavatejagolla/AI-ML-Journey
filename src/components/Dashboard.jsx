import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import StatCards from './StatCards';
import ActiveIssues from './ActiveIssues';
import SystemStatus from './SystemStatus';
import NetworkMap from './NetworkMap';

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main className="dashboard-content">
          <div className="dashboard-header-text">
            <h1>Infrastructure Overview</h1>
            <p className="text-secondary">Real-time monitoring and analytics</p>
          </div>
          
          <StatCards />
          
          <div className="dashboard-grid">
            <div className="grid-main">
              <NetworkMap />
              <ActiveIssues />
            </div>
            <div className="grid-sidebar">
              <SystemStatus />
              {/* Optional: Add an AlertFeed component here if we make one */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
