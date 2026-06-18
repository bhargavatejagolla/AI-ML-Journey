import React from 'react';
import { Search, Bell, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="header glass-panel">
      <div className="search-bar">
        <Search className="search-icon text-secondary" size={18} />
        <input type="text" placeholder="Search resources, IP addresses, or alerts..." />
      </div>
      <div className="header-actions">
        <button className="action-button notification-btn">
          <Bell size={20} className="text-secondary" />
          <span className="badge">3</span>
        </button>
        <div className="user-profile">
          <div className="avatar">
            <User size={20} />
          </div>
          <span className="user-name">Admin User</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
