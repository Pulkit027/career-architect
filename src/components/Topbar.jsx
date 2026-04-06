import { useTheme } from '../ThemeContext';

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const BellIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
);

export default function Topbar({ placeholder = 'Search...', userName = 'Pulkit', userRole = 'Senior Architect' }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="topbar">
      <div className="topbar-search">
        <SearchIcon />
        <input type="text" placeholder={placeholder} />
      </div>

      <div className="topbar-actions">
        <button className="topbar-icon-btn" onClick={toggleTheme} title="Toggle theme">
          {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
        <button className="topbar-icon-btn" title="Notifications">
          <BellIcon />
          <span className="notif-dot"></span>
        </button>
        <div className="topbar-user">
          <div className="topbar-user-info" style={{textAlign:'right'}}>
            <h4>{userName}</h4>
            <span>{userRole}</span>
          </div>
          <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Pulkit&backgroundColor=b6e3f4" alt="User" style={{background:'#e2e8f0',borderRadius:'50%'}}/>
        </div>
      </div>
    </header>
  );
}
