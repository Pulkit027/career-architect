import { useState } from 'react';
import Topbar from '../components/Topbar';
import '../styles/pages.css';

export default function Profile() {
  const [form, setForm] = useState({
    fullName: 'Pulkit',
    workEmail: 'pulkit.dev@example.com',
    linkedin: 'linkedin.com/in/pulkit-dev',
    github: 'github.com/pulkit',
    bio: 'Passionate Full Stack Developer with 4+ years of experience building scalable web applications. Specialist in React, Node.js, and Cloud Infrastructure. Currently focusing on Architecting high-performance digital tools for career tracking.',
  });

  const [twoFA, setTwoFA] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleChange = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="main-content">
      <Topbar placeholder="Search milestones..." userName="Pulkit" userRole="" />
      <div className="page-body">
        <div className="profile-layout">
          <div>
            {/* Hero Card */}
            <div className="profile-card">
              <div className="profile-hero">
                <div className="profile-avatar-wrap">
                  <img
                    src="https://api.dicebear.com/7.x/adventurer/svg?seed=Pulkit&backgroundColor=b6e3f4"
                    alt="Pulkit"
                    className="profile-avatar"
                    style={{ background: '#e2e8f0' }}
                  />
                  <div className="profile-avatar-edit">📷</div>
                </div>
                <div className="profile-hero-info">
                  <h2>
                    Pulkit
                    <span className="active-member-badge">Active Member</span>
                  </h2>
                  <div className="profile-role">
                    Full Stack Developer
                    <span className="profile-location">• Noida, India</span>
                  </div>
                  <div className="profile-contact">
                    <div className="profile-contact-item">✉ pulkit.dev@example.com</div>
                    <div className="profile-contact-item">📞 +91 98765 43210</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Details */}
            <div className="profile-card">
              <div className="professional-details-header">
                <div>
                  <h3>Professional Details</h3>
                  <p>Curate your identity for prospective employers.</p>
                </div>
                <button
                  className="btn-primary"
                  onClick={handleSave}
                  style={{ padding: '10px 20px' }}
                >
                  {saved ? '✓ Saved!' : 'Save Changes'}
                </button>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-input"
                    value={form.fullName}
                    onChange={e => handleChange('fullName', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Work Email</label>
                  <input
                    type="email"
                    className="form-input"
                    value={form.workEmail}
                    onChange={e => handleChange('workEmail', e.target.value)}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">LinkedIn Profile</label>
                  <div className="form-input-wrap">
                    <span className="form-input-icon">🔗</span>
                    <input
                      type="text"
                      className="form-input with-icon"
                      value={form.linkedin}
                      onChange={e => handleChange('linkedin', e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">GitHub Portfolio</label>
                  <div className="form-input-wrap">
                    <span className="form-input-icon">{'</>'}</span>
                    <input
                      type="text"
                      className="form-input with-icon"
                      value={form.github}
                      onChange={e => handleChange('github', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Professional Bio</label>
                <textarea
                  className="form-textarea"
                  value={form.bio}
                  onChange={e => handleChange('bio', e.target.value)}
                  rows={5}
                />
              </div>
            </div>

            {/* Security */}
            <div className="profile-card">
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, marginBottom: 20, color: 'var(--text-primary)' }}>
                Security & Access
              </h3>
              <div className="security-item">
                <div className="security-icon">🔄</div>
                <div className="security-info">
                  <h4>Change Password</h4>
                  <p>Last changed 3 months ago</p>
                </div>
                <button className="btn-outline">Update</button>
              </div>
              <div className="security-item">
                <div className="security-icon">🛡</div>
                <div className="security-info">
                  <h4>Two-Factor Authentication</h4>
                  <p>Add an extra layer of security</p>
                </div>
                <div
                  className={`toggle-switch${twoFA ? '' : ' off'}`}
                  onClick={() => setTwoFA(v => !v)}
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Velocity Card */}
            <div className="velocity-card">
              <div className="velocity-label">CAREER VELOCITY</div>
              <div className="velocity-value">84%</div>
              <div className="velocity-sublabel">Goal Completion</div>
              <div style={{ height: '3px', background: 'rgba(255,255,255,0.1)', borderRadius: 2, marginBottom: 20, overflow: 'hidden' }}>
                <div style={{ width: '84%', height: '100%', background: 'var(--accent-blue)', borderRadius: 2 }} />
              </div>
              <div className="velocity-stats">
                <div className="velocity-stat">
                  <h4>12</h4>
                  <p>Interviews</p>
                </div>
                <div className="velocity-stat">
                  <h4>4</h4>
                  <p>Offers</p>
                </div>
              </div>
            </div>

            {/* Connected Ecosystem */}
            <div className="ecosystem-card">
              <div className="ecosystem-card-title">CONNECTED ECOSYSTEM</div>
              {[
                { icon: '🏀', name: 'Dribbble', status: 'Not Connected', connected: false },
                { icon: '💻', name: 'Stack Overflow', status: 'Connected', connected: true },
              ].map(item => (
                <div key={item.name} className="ecosystem-item">
                  <div className="ecosystem-item-left">
                    <div className="ecosystem-icon">{item.icon}</div>
                    <div>
                      <div className="ecosystem-item-name">{item.name}</div>
                      <div className={`ecosystem-item-status ${item.connected ? 'connected' : 'not-connected'}`}>
                        {item.status}
                      </div>
                    </div>
                  </div>
                  <span style={{ color: 'var(--text-muted)', fontSize: 16 }}>›</span>
                </div>
              ))}
            </div>

            {/* Profile Strength */}
            <div className="profile-strength-card">
              <div className="profile-strength-title">PROFILE STRENGTH</div>
              <div className="strength-level">
                <span className="strength-badge">ARCHITECT LEVEL</span>
                <span className="strength-percent">92%</span>
              </div>
              <div className="strength-bar">
                <div className="strength-fill" style={{ width: '92%' }} />
              </div>
              <div className="strength-checklist">
                {[
                  { label: 'Identity Verified', done: true },
                  { label: 'Experience Tracked', done: true },
                  { label: 'Resume Uploaded', done: false },
                ].map(item => (
                  <div key={item.label} className="strength-check-item">
                    <div className={`check-circle${item.done ? ' done' : ''}`}>
                      {item.done && '✓'}
                    </div>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Pro Tip */}
            <div className="pro-tip-card">
              <h4>Pro Tip</h4>
              <p>Profiles with connected GitHub accounts see a 40% higher engagement rate from technical recruiters.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
