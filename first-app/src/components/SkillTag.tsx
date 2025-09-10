import React from "react";
import './SkillTag.css';

interface SkillTagProps {
    skillName :string;
    level?: 'Beginner' | 'Intermediate' | 'Advanced';
}

const SkillTag: React.FC<SkillTagProps> =({ skillName, level}) => {
   return (
    <span>
        {skillName} {level? `(${level})` :""}
    </span>
   );
};

export default SkillTag;