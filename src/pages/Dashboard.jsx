import { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale, LinearScale, BarElement, PointElement,
  LineElement, Title, Tooltip, Legend, Filler
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Topbar from '../components/Topbar';
import StatCard from '../components/StatCard';
import SkillBar from '../components/SkillBar';
import '../styles/dashboard.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const skills = [
  { name: 'React', percent: 92, color: 'blue' },
  { name: 'DSA', percent: 78, color: 'purple' },
  { name: 'Java', percent: 85, color: 'green' },
  { name: 'Web Development', percent: 95, color: 'orange' },
];

const activities = [
  { icon: '📋', color: 'blue', title: 'Applied to Google', sub: 'Software Engineering Intern (Summer 2024)', time: '2h ago', status: 'pending', statusText: 'PENDING' },
  { icon: '✅', color: 'green', title: 'Completed Skill Assessment', sub: 'Backend System Design Mastery', time: '5h ago', status: 'mastery', statusText: 'MASTERY' },
  { icon: '📅', color: 'orange', title: 'Interview Scheduled', sub: 'With Stripe Recruitment Team', time: 'Yesterday', status: 'upcoming', statusText: 'UPCOMING' },
];

export default function Dashboard() {
  const chartRef = useRef(null);

  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Applications',
        data: [4, 7, 5, 9, 6, 3, 8],
        backgroundColor: 'rgba(14, 165, 233, 0.8)',
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(15,23,42,0.9)',
        titleColor: '#94a3b8',
        bodyColor: '#ffffff',
        padding: 10,
        cornerRadius: 8,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#94a3b8', font: { size: 12 } },
        border: { display: false },
      },
      y: {
        grid: { color: 'rgba(100,116,139,0.1)' },
        ticks: { color: '#94a3b8', font: { size: 12 } },
        border: { display: false },
      },
    },
  };

  return (
    <div className="main-content">
      <Topbar placeholder="Search internships, skills, or projects..." />
      <div className="page-body">
        <div className="page-header">
          <h1>Performance Overview</h1>
          <p>Tracking your path to the next professional milestone.</p>
        </div>

        <div className="stat-cards-grid">
          <StatCard icon="▶" value="48" label="Applications" badge="+12%" badgeType="positive" iconColor="blue" />
          <StatCard icon="💬" value="12" label="Interviews" badge="Active" badgeType="info" iconColor="orange" />
          <StatCard icon="⚡" value="86%" label="Skill Mastery" badge="Top 5%" badgeType="neutral" iconColor="yellow" />
          <StatCard icon="🖥" value="14" label="Projects" badge="2 New" badgeType="positive" iconColor="green" />
        </div>

        <div className="dashboard-grid">
          <div>
            <div className="chart-card">
              <div className="chart-card-header">
                <div>
                  <h3>Weekly Applications</h3>
                  <p>Performance metrics for the last 7 days</p>
                </div>
                <div className="chart-header-actions">
                  <button className="btn-outline">Export</button>
                  <button className="btn-primary">Full Report</button>
                </div>
              </div>
              <div style={{ height: '220px' }}>
                <Bar data={chartData} options={chartOptions} />
              </div>
            </div>

            <div className="activity-card">
              <div className="activity-card-header">
                <h3>Recent Activity</h3>
                <a href="#">View Timeline</a>
              </div>
              {activities.map((a, i) => (
                <div key={i} className="activity-item">
                  <div className={`activity-icon ${a.color}`}>{a.icon}</div>
                  <div className="activity-info">
                    <h4>{a.title}</h4>
                    <p>{a.sub}</p>
                  </div>
                  <div className="activity-meta">
                    <span className="activity-time">{a.time}</span>
                    <span className={`activity-status ${a.status}`}>{a.statusText}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="skill-progress-card">
              <div className="skill-progress-card-header">
                <h3>Skill Progress</h3>
                <button className="icon-menu">···</button>
              </div>
              {skills.map(s => (
                <SkillBar key={s.name} name={s.name} percent={s.percent} color={s.color} />
              ))}
              <button className="add-skill-btn">+ Add New Skill</button>
            </div>

            <div className="milestone-card">
              <h3>Next Milestone</h3>
              <p>You're only 2 projects away from reaching "Architect" status in React mastery.</p>
              <button className="btn-primary">Start Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
