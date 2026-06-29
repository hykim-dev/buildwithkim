"use client"
import OffCanvasPanel from '@/components/offcanvus/OffCanvasPanel';
import SiteLogo from '@/components/shared/SiteLogo';
import useStickyHeader from '@/hooks/useStickyHeader';
import NavMenus from '../subComponents/NavMenus';
import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

interface headerProps {
    spacingCls?: string;
    customCls?: string
}
const CommonHeader: React.FC<headerProps> = ({ spacingCls = "", customCls = "" }) => {
    const [openOffCanvas, setOpenOffCanvas] = useState(false);
    const isSticky = useStickyHeader(20);
    const { theme, setTheme } = useTheme();

    const handleToggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <>
            <header>
                <div id="header-sticky" className={`tp-header-area tp-transparent ${spacingCls} tp-header-spacing ${isSticky ? 'header-sticky' : ''}`}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                                <div className="tp-header-logo">
                                    <SiteLogo className="logo-dark d-none" />
                                    <SiteLogo className="logo-white" />
                                </div>
                            </div>
                            <div className="col-lg-6 d-none d-xl-block">
                                <div className={`tp-main-menu ${customCls} text-end mr-85`}>
                                    <nav className="tp-mobile-menu-active">
                                        <NavMenus />
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-9 col-md-8 col-6">
                                <div className="tp-header-right d-flex justify-content-end">
                                    <div className="tp-dark-switch-wrap ml-30">
                                        <button onClick={handleToggleTheme} className="tp-dark-switch p-relative">
                                            <i className="moon fa-light fa-moon"></i>
                                            <i className="sun fa-light fa-sun-bright"></i>
                                        </button>
                                    </div>
                                    <Link href="/contact" className="tp-btn d-none d-md-inline-flex align-items-center ml-30">
                                        <span>
                                            <span className="text-1">{`Let's`} Talk</span>
                                            <span className="text-2">{`Let's`} Talk</span>
                                        </span>
                                    </Link>
                                    <button onClick={() => setOpenOffCanvas(true)} className="tp-header-menu-btn tp-menu-bar ml-10">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* off canvas */}
            <OffCanvasPanel openOffcanvas={openOffCanvas} setOpenOffcanvas={setOpenOffCanvas} />
            {/* off canvas */}
        </>
    );
};

export default CommonHeader;
