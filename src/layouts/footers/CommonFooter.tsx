import { getCurrentYear } from '@/utils/getCurrentYear';
import { profile, socialLinks } from '@/data/profileData';
import Link from 'next/link';

const CommonFooter = () => {
    return (
        <footer>
            <div className="tp-footer-area tp-footer-2-wrap grey-bg pt-155">
                <div className="container">
                    <div className="tp-footer-middle mb-30">
                        <div className="row">
                            <div className="col-xxl-5 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                <div className="tp-footer-widget mb-40">
                                    <h5 className="tp-footer-tittle mb-15">Stay connected</h5>
                                    <Link className="tp-footer-email" href={`mailto:${profile.email}`}>{profile.email}</Link>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                <div className="tp-footer-widget mb-40">
                                    <h5 className="tp-footer-tittle mb-15">Location</h5>
                                    <span className="tp-footer-link">{profile.location}</span>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-sm-6">
                                <div className="tp-footer-widget ml-40  p-relative mb-40">
                                    <h5 className="tp-footer-tittle mb-15">Contact</h5>
                                    <div>
                                        <Link className="tp-footer-link" href={profile.phoneHref}>{profile.phoneDisplay}</Link>
                                    </div>
                                    <div>
                                        <Link className="tp-footer-link" href={profile.linkedin} target="_blank">{profile.linkedinLabel}</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                <div className="tp-footer-widget ml-80 p-relative mb-40">
                                    <h5 className="tp-footer-tittle mb-30">Connect</h5>
                                    <div className="tp-footer-social mb-70 d-flex">
                                        {socialLinks.map((social) => (
                                            <span key={social.label}>
                                                <Link href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined}>
                                                    <i className={social.iconClass}></i>
                                                </Link>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="tp-hero-bigtext pt-40">
                                    <h2>{profile.displayName}</h2>
                                </div>
                                <div className="tp-footer-copyright pb-15 text-center">
                                    <p>© {getCurrentYear()} <Link href="/">{profile.displayName}</Link>. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default CommonFooter;
