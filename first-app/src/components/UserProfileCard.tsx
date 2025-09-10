import React from "react";
import SkillTag from "./SkillTag";
import './UserProfileCard.css';

interface Skill {
  name: string;
  level?: "Beginner" | "Intermediate" | "Advanced";
}

interface UserData {
  id: string | number;
  name: string;
  avatarUrl?: string;
  email: string;
  isOnline: boolean;
  skills: Skill[];
}

interface UserProfileCardProps {
  user: UserData;
  onViewDetails: (userId: string | number) => void;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  onViewDetails,
}) => {
  return (
    <div className="user-card">      
      <div className="user-header">
        <img
          src={user.avatarUrl}
          alt={user.name}
          className="user-avatar"
        />
        <div>
          <h3 className="user-name">{user.name}</h3>
          <p className="user-email">{user.email}</p>
          <span
            className={`user-status ${user.isOnline ? "online" : "offline"}`}
          >
            <span className="status-dot"></span>
            {user.isOnline ? "ออนไลน์" : "ออฟไลน์"}
          </span>
        </div>
      </div>

      <div className="user-skills">
        {user.skills.map((skill, index) => (
          <SkillTag key={index} skillName={skill.name} level={skill.level} />
        ))}
      </div>
      
      <button className="details-btn" onClick={() => onViewDetails(user.id)}>
        ดูรายละเอียด
      </button>
    </div>
  );
};

export default UserProfileCard;
