import { timelineExperience } from '@/data/profileData';

const ExperienceInfo = () => {
  return (
    <>
      {timelineExperience.map((exp, index) => (
        <div
          key={index}
          className={`ab-personal-info__exprience-box d-flex align-items-start ${
            exp.isLast ? "ab-personal-bttom-border" : ""
          }`}
        >
          <span className="ab-personal-info__exprience-length">
            {exp.duration}
          </span>
          <div className="ab-personal-info__exprience-content">
            <h4 className="ab-personal-info__exprience-title">{exp.title}</h4>
            <span>{exp.company}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default ExperienceInfo;
