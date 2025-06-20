import React from 'react';
import './ActivityCard.css'; // Assuming there's a CSS file for styles

const ActivityCard = ({ activity }) => {
  return (
    <div className="activity-card">
      <div className="activity-details">
        <h3 className="activity-title">{activity.title}</h3>
        <p className="activity-description">{activity.description}</p>
        <div className="participants-section">
          <h4>Participants</h4>
          {activity.participants && activity.participants.length > 0 ? (
            <ul className="participants-list">
              {activity.participants.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>
          ) : (
            <p className="no-participants">No participants yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;