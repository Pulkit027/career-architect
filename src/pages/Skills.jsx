import { useEffect, useRef, useState } from 'react';
import Topbar from '../components/Topbar';
import '../styles/skills.css';

const skillsData = [
  {
    id: 1, icon: '⚛️', iconColor: 'blue-light', level: 'expert',
    name: 'React',
    desc: 'Building complex, high-performance web applications using functional components and hooks.',
    proficiency: 94, lastPracticed: '2 hours ago', wide: false
  },
  {
    id: 2, icon: '🎨', iconColor: 'orange-light', level: 'advanced',
    name: 'UI/UX Design',
    desc: 'Creating intuitive user journeys and high-fidelity prototypes using design systems.',
    subStats: [{ label: 'Figma', value: '98%' }, { label: 'Prototyping', value: '85%' }],
    overallMastery: 89, lastPracticed: 'Yesterday', wide: true
  },
  {
    id: 3, icon: '🟩', iconColor: 'green-light', level: 'advanced',
    name: 'Node.js',
    desc: 'Scalable back-end services, API integration, and architectural middleware design.',
    proficiency: 82, lastPracticed: '3 days ago', wide: false
  },
  {
    id: 4, icon: '🐍', iconColor: 'blue-light', level: 'expert',
    name: 'Python',
    desc: 'Data science orchestration, automation scripts, and machine learning foundations.',
    proficiency: 91, lastPracticed: '1 week ago', wide: false
  },
  {
    id: 5, icon: '🗄️', iconColor: 'gray-light', level: null,
    name: 'SQL & Databases',
    desc: 'Click to expand details or add new mastery targets.',
    complete: 75, wide: false, placeholder: true
  },
];

const roadmap = [
  { icon: '🔷', name: 'Next Goal: Advanced Typescript', target: 'Oct 2024', percent: 68, color: 'blue' },
  { icon: '✏️', name: 'Next Goal: Design Systems Engineering', target: 'Nov 2024', percent: 25, color: 'orange' },
];

function SkillCard({ skill }) {
  const [barWidth, setBarWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setBarWidth(skill.proficiency || skill.overallMastery || 75); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  if (skill.placeholder) {
    return (
      <div className="skill-placeholder-card" ref={ref}>
        <div className="skill-placeholder-icon">{skill.icon}</div>
        <h4>{skill.name}</h4>
        <p>{skill.desc}</p>
        <span style={{ marginTop: 12, fontSize: 11, background: 'var(--bg-card)', padding: '4px 10px', borderRadius: 20, color: 'var(--text-muted)', fontWeight: 600 }}>
          {skill.complete}% COMPLETE
        </span>
      </div>
    );
  }

  return (
    <div className={`skill-card${skill.wide ? ' skill-card-wide' : ''}`} ref={ref}>
      <div className="skill-card-top">
        <div className={`skill-card-icon ${skill.iconColor}`}>{skill.icon}</div>
        {skill.level && (
          <span className={`skill-level-badge ${skill.level}`}>{skill.level.toUpperCase()}</span>
        )}
      </div>
      <h3>{skill.name}</h3>
      <p>{skill.desc}</p>

      {skill.subStats ? (
        <>
          <div className="skill-sub-stats">
            {skill.subStats.map(s => (
              <div key={s.label} className="skill-sub-stat">
                <div className="skill-sub-stat-label">{s.label}</div>
                <div className="skill-sub-stat-value">{s.value}</div>
              </div>
            ))}
          </div>
          <div className="skill-overall-label">
            <span>OVERALL MASTERY</span>
            <span>{skill.overallMastery}%</span>
          </div>
          <div className="skill-overall-bar">
            <div className="skill-overall-fill" style={{ width: `${barWidth}%` }} />
          </div>
        </>
      ) : (
        <>
          <div className="skill-proficiency-row">
            <span className="skill-proficiency-label">PROFICIENCY</span>
            <span className="skill-proficiency-value">{skill.proficiency}%</span>
          </div>
          <div className="skill-prof-bar">
            <div className="skill-prof-fill" style={{ width: `${barWidth}%` }} />
          </div>
        </>
      )}
      <div className="skill-last-practiced">
        🕐 Last practiced: {skill.lastPracticed}
      </div>
    </div>
  );
}

export default function Skills() {
  const [roadbarWidths, setRoadbarWidths] = useState([0, 0]);

  useEffect(() => {
    const timer = setTimeout(() => setRoadbarWidths(roadmap.map(r => r.percent)), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="main-content">
      <Topbar placeholder="Search architectural skills..." userName="Pulkit Architect" userRole="Lead Developer" />
      <div className="page-body">
        <div className="skills-page-header">
          <div className="page-header" style={{ margin: 0 }}>
            <h1>Skills Mastery</h1>
            <p>Curate and refine your professional toolkit. Excellence is an architectural pursuit.</p>
          </div>
          <button className="btn-primary" style={{ padding: '11px 20px', fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}>
            ＋ Add Skill
          </button>
        </div>

        <div className="skills-grid">
          {skillsData.map(skill => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>

        <div className="roadmap-section">
          <h2>Active Mastery Roadmap</h2>
          {roadmap.map((item, i) => (
            <div key={i} className="roadmap-item">
              <div className="roadmap-icon">{item.icon}</div>
              <div className="roadmap-info">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                  <h4>{item.name}</h4>
                  <span className="roadmap-target">Target: {item.target}</span>
                </div>
                <div className="roadmap-progress-row">
                  <div className="roadmap-bar-track">
                    <div
                      className={`roadmap-bar-fill${item.color === 'orange' ? ' orange' : ''}`}
                      style={{ width: `${roadbarWidths[i]}%`, transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)' }}
                    />
                  </div>
                  <span className="roadmap-percent">{item.percent}%</span>
                </div>
              </div>
              <button className="roadmap-track-btn">Track Progress</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
