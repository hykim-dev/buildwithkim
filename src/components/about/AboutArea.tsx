import { profile } from '@/data/profileData';
import { LocationIcon } from '@/svg';
import Image from 'next/image';
import Link from 'next/link';

const AboutArea = () => {
    return (
        <div className="tp-about-area tp-about-spacing p-relative pb-170">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-8">
                        <div className="tp-about-details mr-100 mb-30">
                            <h2 className="tp-about-details-tittle">
                                Hi, I&apos;m {profile.displayName}, a software engineer focused on scalable frontend systems, cross-platform product UI, and AI-enabled experiences.{" "}
                                <span>
                                    I enjoy turning CMS content, APIs, localization needs, and performance requirements into clean, maintainable interfaces that are ready for production.
                                </span>
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="tp-about-details-thumb mb-40">
                            <Image className='w-100 h-auto' width={420} height={450} src={profile.heroImage} alt={profile.displayName} />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="tp-about-bottom d-flex justify-content-between align-items-center pt-40">
                            <Link
                                href={profile.resumeHref}
                                target="_blank"
                                className="tp-btn tp-btn-border d-inline-flex align-items-center mb-20"
                            >
                                <span>
                                    <span className="text-1">
                                        Download Resume
                                    </span>
                                    <span className="text-2">
                                        Download Resume
                                    </span>
                                </span>
                            </Link>
                            <div className="tp-about-bottom-border mb-20"></div>
                            <span className="tp-about-bottom-location mb-20">
                                <LocationIcon />{" "}
                                Based in {profile.location}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutArea;
