import React from 'react';
import { Activity, Server, AlertCircle, Zap } from 'lucide-react';

const StatCard = ({ title, value, change, isPositive, icon: Icon, colorClass }) => (
  <div className="stat-card glass-panel">
    <div className="stat-header">
      <h3 className="text-secondary">{title}</h3>
      <div className={`icon-container ${colorClass}`}>
        <Icon size={20} />
      </div>
    </div>
    <div className="stat-body">
      <div className="stat-value">{value}</div>
      <div className={`stat-change ${isPositive ? 'positive' : 'negative'}`}>
        {isPositive ? '+' : '-'}{Math.abs(change)}%
        <span className="text-secondary"> from last week</span>
      </div>
    </div>
  </div>
);

const StatCards = () => {
  const stats = [
    {
      title: 'Active Nodes',
      value: '1,248',
      change: 2.4,
      isPositive: true,
      icon: Server,
      colorClass: 'icon-primary'
    },
    {
      title: 'Avg Latency',
      value: '24ms',
      change: -5.1,
      isPositive: true, // Lower latency is better
      icon: Activity,
      colorClass: 'icon-success'
    },
    {
      title: 'Critical Alerts',
      value: '3',
      change: 12.5,
      isPositive: false,
      icon: AlertCircle,
      colorClass: 'icon-danger'
    },
    {
      title: 'Bandwidth Usage',
      value: '78%',
      change: 4.2,
      isPositive: false,
      icon: Zap,
      colorClass: 'icon-warning'
    }
  ];

  return (
    <div className="stat-cards-container">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatCards;
