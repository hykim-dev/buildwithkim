import { heroSkillTags, profile } from '@/data/profileData';
import Image from 'next/image';

const HeroOne = () => {
    return (
        <>
            <div className="tp-hero-area tp-hero-spacing p-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="tp-hero-tittle-wrap mb-25">
                                <h2 className="tp-hero-tittle">
                                    <span>I&apos;m {profile.displayName} 👋</span>
                                    {profile.heroRoles.map((role) => (
                                        <div key={role}>{role}</div>
                                    ))}
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-hero-video text-lg-end mb-30">
                                <Image
                                    width={640}
                                    height={640}
                                    className="w-100 h-auto rounded-4"
                                    src={profile.heroImage}
                                    alt={profile.displayName}
                                />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="tp-hero-cetagory d-flex fix">
                                {Array.from({ length: 4 }).map((_, columnIndex) => (
                                    <div key={columnIndex} className="animate-right d-flex align-items-center">
                                        <span>{heroSkillTags[columnIndex * 2]}</span>
                                        <span>{heroSkillTags[(columnIndex * 2) + 1]}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="tp-hero-bigtext">
                                <h2>{profile.displayName}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tp-hero-circle d-none">
                    <Image className="circle-1" width={150} height={150} src="/assets/img/hero/hero-bg-1.svg" alt="hero background" />
                    <Image className="circle-2" width={150} height={150} src="/assets/img/hero/hero-bg-2.svg" alt="hero background" />
                </div>
            </div>
        </>
    );
};

export default HeroOne;
