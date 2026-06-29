import { expertiseCapsules } from '@/data/profileData';

const CapsuleItems = () => {
    return (
        <div className="tp-about-capsule-item-wrapper">
            {expertiseCapsules.map((cap, index) => (
                <p key={index}>
                    <span className="tp-about-capsule-item">
                        {cap}
                    </span>
                </p>
            ))}
        </div>
    );
};

export default CapsuleItems;
