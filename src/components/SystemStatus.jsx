import React from 'react';
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

const SystemStatus = () => {
  const services = [
    { name: 'API Gateway', status: 'operational', uptime: '99.99%' },
    { name: 'Authentication', status: 'operational', uptime: '99.95%' },
    { name: 'Database Cluster', status: 'degraded', uptime: '98.50%' },
    { name: 'Storage Service', status: 'operational', uptime: '100%' },
    { name: 'Analytics Engine', status: 'operational', uptime: '99.90%' },
  ];

  const getStatusIcon = (status) => {
    switch(status) {
      case 'operational': return <CheckCircle size={18} className="text-success" />;
      case 'degraded': return <AlertTriangle size={18} className="text-warning" />;
      case 'down': return <XCircle size={18} className="text-danger" />;
      default: return null;
    }
  };

  return (
    <div className="dashboard-card system-status glass-panel">
      <div className="card-header">
        <h2>System Status</h2>
      </div>
      <div className="card-body">
        <ul className="status-list">
          {services.map((service, idx) => (
            <li key={idx} className="status-item">
              <div className="service-info">
                {getStatusIcon(service.status)}
                <span className="service-name">{service.name}</span>
              </div>
              <div className="service-metrics">
                <span className={`status-text ${service.status}`}>
                  {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                </span>
                <span className="uptime text-secondary">{service.uptime}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SystemStatus;
