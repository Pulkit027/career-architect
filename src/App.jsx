import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Internships from './pages/Internships';
import Skills from './pages/Skills';
import Profile from './pages/Profile';
import './styles/global.css';
import './styles/layout.css';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-layout">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}