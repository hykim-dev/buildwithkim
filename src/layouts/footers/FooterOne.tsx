import { profile, socialLinks } from '@/data/profileData';
import FooterOneCopyright from './subComponent/FooterOneCopyright';
import Image from 'next/image';
import Link from 'next/link';

const FooterOne = () => {
    return (
        <footer>
            <div className="tp-footer-area tp-black-bg pt-110">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-7 col-md-8">
                            <div className="tp-footer-tittle-wrap p-relative mb-50">
                                <h2 className="tp-footer-top-tittle">Let&apos;s build product experiences that ship.</h2>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-4">
                            <div className="tp-footer-social mb-70 d-flex justify-content-md-end">
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
                    <div className="tp-footer-middle mb-30">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="tp-footer-widget mb-40">
                                    <h5 className="tp-footer-tittle mb-15">Based in <br /> <span className="tp-footer-location">{profile.location}</span></h5>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="tp-footer-widget tp-footer-border p-relative mb-40">
                                    <h5 className="tp-footer-tittle mb-15">Contact</h5>
                                    <div>
                                        <Link className="tp-footer-link" href={profile.phoneHref}>{profile.phoneDisplay}</Link>
                                    </div>
                                    <div>
                                        <Link className="tp-footer-link" href={`mailto:${profile.email}`}>{profile.email}</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="tp-footer-widget tp-footer-subscribe-form mb-40">
                                    <h5 className="tp-footer-tittle mb-15">Availability</h5>
                                    <p className="tp-footer-link mb-15">{profile.availability}</p>
                                    <Link className="tp-footer-link" href={profile.resumeHref} target="_blank">
                                        Download resume
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* footer copyright */}
                    <FooterOneCopyright />
                </div>
            </div>
        </footer>
    );
};

export default FooterOne;
