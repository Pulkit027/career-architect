export default function StatCard({ icon, value, label, badge, badgeType = 'positive', iconColor = 'blue' }) {
  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <div className={`stat-card-icon ${iconColor}`}>{icon}</div>
        {badge && <span className={`stat-card-badge ${badgeType}`}>{badge}</span>}
      </div>
      <div className="stat-card-value">{value}</div>
      <div className="stat-card-label">{label}</div>
    </div>
  );
}
