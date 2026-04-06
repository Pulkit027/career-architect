import { NavLink } from 'react-router-dom';

const DashIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
    <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
  </svg>
);

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">🏛️</div>
        <div className="sidebar-logo-text">
          <h2>Career<br/>Architect</h2>
          <span>Digital Atelier</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/" end className={({ isActive }) => `sidebar-nav-item${isActive ? ' active' : ''}`}>
          <DashIcon /> Dashboard
        </NavLink>
        <NavLink to="/internships" className={({ isActive }) => `sidebar-nav-item${isActive ? ' active' : ''}`}>
          <BriefcaseIcon /> Internships
        </NavLink>
        <NavLink to="/skills" className={({ isActive }) => `sidebar-nav-item${isActive ? ' active' : ''}`}>
          <StarIcon /> Skills
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => `sidebar-nav-item${isActive ? ' active' : ''}`}>
          <UserIcon /> Profile
        </NavLink>
      </nav>

      <div className="sidebar-plan">
        <div className="plan-badge">
          <div className="plan-badge-dot"></div>
          Pro Plan Active
        </div>
        <div className="plan-progress-bar">
          <div className="plan-progress-fill"></div>
        </div>
      </div>

      <div className="sidebar-bottom">
        <div className="sidebar-user">
          <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Pulkit&backgroundColor=b6e3f4" alt="User" style={{background:'#1e293b',borderRadius:'50%'}}/>
          <div className="sidebar-user-info">
            <h4>Pulkit</h4>
            <span>Full Stack Dev</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
