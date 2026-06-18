import React from 'react';
import { LayoutDashboard, AlertTriangle, Activity, Map, Settings, Users, Server } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="sidebar glass-panel">
      <div className="sidebar-logo">
        <Server className="logo-icon text-primary" />
        <h2>NetOps <span className="text-primary">Pro</span></h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li className="active">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </li>
          <li>
            <AlertTriangle size={20} />
            <span>Alerts</span>
          </li>
          <li>
            <Activity size={20} />
            <span>Performance</span>
          </li>
          <li>
            <Map size={20} />
            <span>Topology</span>
          </li>
          <li>
            <Users size={20} />
            <span>Team</span>
          </li>
          <li>
            <Settings size={20} />
            <span>Settings</span>
          </li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <div className="system-health-indicator">
          <span className="status-dot healthy pulse"></span>
          <span>System Healthy</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
