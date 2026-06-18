import React from 'react';
import { AlertCircle, Clock, Server } from 'lucide-react';

const ActiveIssues = () => {
  const issues = [
    { id: 'ISS-1042', severity: 'critical', component: 'Core Router NYC-1', time: '10m ago', status: 'Investigating' },
    { id: 'ISS-1043', severity: 'warning', component: 'DB Cluster EU-West', time: '45m ago', status: 'Under Review' },
    { id: 'ISS-1044', severity: 'critical', component: 'Auth Service', time: '1h ago', status: 'Fix in Progress' },
    { id: 'ISS-1045', severity: 'info', component: 'Load Balancer AP-1', time: '2h ago', status: 'Monitoring' },
  ];

  return (
    <div className="dashboard-card active-issues glass-panel">
      <div className="card-header">
        <h2>Active Issues</h2>
        <button className="text-button">View All</button>
      </div>
      <div className="card-body">
        <table className="issues-table">
          <thead>
            <tr>
              <th>Issue ID</th>
              <th>Severity</th>
              <th>Component</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {issues.map(issue => (
              <tr key={issue.id}>
                <td className="issue-id">{issue.id}</td>
                <td>
                  <span className={`badge severity-${issue.severity}`}>
                    {issue.severity === 'critical' && <AlertCircle size={14} />}
                    {issue.severity}
                  </span>
                </td>
                <td className="component-cell">
                  <Server size={14} className="text-secondary" />
                  {issue.component}
                </td>
                <td className="text-secondary">
                  <div className="time-cell">
                    <Clock size={14} />
                    {issue.time}
                  </div>
                </td>
                <td>{issue.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveIssues;
