import SiteLogo from '@/components/shared/SiteLogo';
import PhotoProviderWrapper from '@/provider/PhotoProviderWrapper';
import { profile, projectPortfolioData, socialLinks } from '@/data/profileData';
import MobileMenus from '@/layouts/subComponents/MobileMenus';
import { CloseIcon } from '@/svg';
import { PhotoView } from 'react-photo-view';
import { ImageDT } from '@/types/custom-dt';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const galleryImages: ImageDT[] = [
    ...projectPortfolioData.map((project) => ({
        id: project.id,
        imgSrc: project.image,
    })),
];

// prop type
type IProps = {
    openOffcanvas: boolean;
    setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};

const OffCanvasPanel: React.FC<IProps> = (
    {
        openOffcanvas,
        setOpenOffcanvas
    }) => {

    return (
        <>
            <div className="tp-offcanvas-area">
                <div className={`tp-offcanvas ${openOffcanvas ? "opened" : ""}`}>
                    <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
                        <div className="tp-header-logo">
                            <SiteLogo className="logo-dark d-none" />
                            <SiteLogo className="logo-white" />
                        </div>
                        <div className="tp-offcanvas-close-btn">
                            <button onClick={() => setOpenOffcanvas(false)} className="close-btn">
                                <CloseIcon />
                            </button>
                        </div>
                    </div>
                    <div className="tp-offcanvas-content d-none d-xl-block">
                        <h3 className="tp-offcanvas-title">{profile.displayName}</h3>
                        <p>{profile.shortBio}</p>
                    </div>
                    <div className="tp-offcanvas-menu dropdown-style d-xl-none">
                        <nav>
                            <MobileMenus/>
                        </nav>
                    </div>
                    <div className="tp-offcanvas-gallery d-none d-xl-block">
                        <div className="row gx-2">
                            <PhotoProviderWrapper>
                                {galleryImages.map((image: ImageDT) => (
                                    <div className="col-md-3 col-3" key={image.id}>
                                        <div className="tp-offcanvas-gallery-img fix">
                                            <PhotoView src={image.imgSrc}>
                                                <Image width={82} height={82} src={image.imgSrc} alt={`gallery image${image.id}`} />
                                            </PhotoView>
                                        </div>
                                    </div>
                                ))}
                            </PhotoProviderWrapper>
                        </div>
                    </div>
                    <div className="tp-offcanvas-contact">
                        <h3 className="tp-offcanvas-title sm">Information</h3>
                        <ul>
                            <li><Link href={profile.phoneHref}>{profile.phoneDisplay}</Link></li>
                            <li><Link href={`mailto:${profile.email}`}>{profile.email}</Link></li>
                            <li><Link href={profile.linkedin} target="_blank">{profile.linkedinLabel}</Link></li>
                            <li><span>{profile.location}</span></li>
                        </ul>
                    </div>
                    <div className="tp-offcanvas-social">
                        <h3 className="tp-offcanvas-title sm">Connect</h3>
                        <ul>
                            {socialLinks.map((social) => (
                                <li key={social.label}>
                                    <Link href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined}>
                                        <i className={social.iconClass}></i>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div onClick={() => setOpenOffcanvas(false)}
                className={`body-overlay ${openOffcanvas ? "apply" : ""}`}
            ></div>
        </>
    );
};

export default OffCanvasPanel;
