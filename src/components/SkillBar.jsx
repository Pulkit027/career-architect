import { useEffect, useRef, useState } from 'react';

export default function SkillBar({ name, percent, color = 'blue' }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setWidth(percent); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [percent]);

  const gradients = {
    blue: 'linear-gradient(90deg, #0ea5e9, #38bdf8)',
    purple: 'linear-gradient(90deg, #8b5cf6, #a78bfa)',
    green: 'linear-gradient(90deg, #10b981, #34d399)',
    orange: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
  };

  return (
    <div className="skill-item" ref={ref}>
      <div className="skill-item-header">
        <span className="skill-item-name">{name}</span>
        <span className="skill-item-percent">{percent}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{ width: `${width}%`, background: gradients[color] || gradients.blue }}
        />
      </div>
    </div>
  );
}
