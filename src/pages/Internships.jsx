import { useState } from 'react';
import Topbar from '../components/Topbar';
import StatCard from '../components/StatCard';
import '../styles/pages.css';
import '../styles/dashboard.css';

const internships = [
  { id: 1, logo: '🔵', company: 'Google', role: 'Software Engineering Intern', location: 'Remote', tags: ['React', 'Python', 'GCP'], status: 'pending', statusText: 'Pending', date: 'Apr 3, 2026', stipend: '$8,000/mo' },
  { id: 2, logo: '🟠', company: 'Stripe', role: 'Frontend Developer Intern', location: 'San Francisco, CA', tags: ['TypeScript', 'Node.js', 'AWS'], status: 'interview', statusText: 'Interview', date: 'Mar 28, 2026', stipend: '$7,500/mo' },
  { id: 3, logo: '🟣', company: 'Figma', role: 'Product Design Intern', location: 'New York, NY', tags: ['Figma', 'UI/UX', 'Prototyping'], status: 'applied', statusText: 'Applied', date: 'Mar 20, 2026', stipend: '$6,000/mo' },
  { id: 4, logo: '⚫', company: 'Vercel', role: 'DevOps / Infrastructure Intern', location: 'Remote', tags: ['DevOps', 'CI/CD', 'Next.js'], status: 'offer', statusText: 'Offer', date: 'Mar 15, 2026', stipend: '$9,000/mo' },
  { id: 5, logo: '🔴', company: 'Netflix', role: 'Backend Engineering Intern', location: 'Los Gatos, CA', tags: ['Java', 'Kafka', 'Microservices'], status: 'rejected', statusText: 'Rejected', date: 'Mar 10, 2026', stipend: '$8,500/mo' },
  { id: 6, logo: '🟤', company: 'Airbnb', role: 'Full Stack Developer Intern', location: 'San Francisco, CA', tags: ['React', 'Ruby on Rails', 'GraphQL'], status: 'applied', statusText: 'Applied', date: 'Apr 1, 2026', stipend: '$7,000/mo' },
];

const filters = ['All', 'Applied', 'Interview', 'Pending', 'Offer', 'Rejected'];

export default function Internships() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? internships
    : internships.filter(i => i.statusText === activeFilter);

  return (
    <div className="main-content">
      <Topbar placeholder="Search internships..." />
      <div className="page-body">
        <div className="page-header">
          <h1>Internship Tracker</h1>
          <p>Monitor your applications and stay ahead of every opportunity.</p>
        </div>

        <div className="internships-stats">
          <StatCard icon="📤" value="48" label="Total Applied" badge="+5 this week" badgeType="positive" iconColor="blue" />
          <StatCard icon="🎤" value="12" label="Interviews" badge="Active" badgeType="info" iconColor="orange" />
          <StatCard icon="🏆" value="4" label="Offers Received" badge="New!" badgeType="positive" iconColor="green" />
          <StatCard icon="📊" value="68%" label="Response Rate" badge="Top 20%" badgeType="neutral" iconColor="yellow" />
        </div>

        <div className="internship-filters">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-btn${activeFilter === f ? ' active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
              {f !== 'All' && (
                <span style={{ marginLeft: 6, opacity: 0.7 }}>
                  ({internships.filter(i => i.statusText === f).length})
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="internship-list">
          {filtered.map(intern => (
            <div key={intern.id} className="internship-card">
              <div className="internship-logo">{intern.logo}</div>
              <div className="internship-details">
                <div className="internship-title">{intern.role}</div>
                <div className="internship-company">
                  <strong>{intern.company}</strong>
                  <span style={{ color: 'var(--text-muted)' }}>•</span>
                  {intern.location}
                  <span style={{ color: 'var(--text-muted)' }}>•</span>
                  <span style={{ color: 'var(--accent-green)', fontWeight: 600 }}>{intern.stipend}</span>
                </div>
                <div className="internship-tags">
                  {intern.tags.map(t => (
                    <span key={t} className="internship-tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="internship-meta">
                <span className={`internship-status-badge ${intern.status}`}>{intern.statusText}</span>
                <span className="internship-date">{intern.date}</span>
                {intern.status === 'applied' || intern.status === 'pending' ? (
                  <button className="internship-apply-btn">Follow Up</button>
                ) : intern.status === 'offer' ? (
                  <button className="internship-apply-btn" style={{ background: 'var(--accent-green)' }}>Accept Offer</button>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
            <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-secondary)', marginBottom: 6 }}>No results</h3>
            <p>No internships found with this filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}
