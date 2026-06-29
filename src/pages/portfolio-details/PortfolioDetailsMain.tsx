import ScrollSmoothProvider from '@/components/providers/ScrollSmoothProvider';
import CustomCursorProvider from '@/components/providers/CustomCursorProvider';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/shared/Search/SearchArea';
import CommonFooter from '@/layouts/footers/CommonFooter';
import CommonHeader from '@/layouts/headers/CommonHeader';
import projectData from '@/data/projectData';
import { IdProps } from '@/types/custom-dt';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioDetailsMain = ({ id }: IdProps) => {
    const portfolio = projectData.find((project) => project.id == id) ?? projectData[0];
    
    return (
            <ScrollSmoothProvider>
                <CustomCursorProvider>
                    <div id="magic-cursor" className="cursor-white-bg">
                        <div id="ball"></div>
                    </div>

                    {/* Global Components */}
                    <BackToTop />
                    <SearchArea />
                    <CommonHeader spacingCls="mt-20" customCls="tp-main-menu-2" />

                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            <main>
                                <div className="tp-project-area tp-project-details-spacing pt-160 pb-130">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="tp-project-details-left-info mb-30">
                                                    <div className="tp-project-details-left-content mb-35">
                                                        <h5 className="tp-project-details-left-title">Client</h5>
                                                        <span>{portfolio.client}</span>
                                                    </div>
                                                    <div className="tp-project-details-left-content mb-35">
                                                        <h5 className="tp-project-details-left-title">Role</h5>
                                                        <span>{portfolio.role}</span>
                                                    </div>
                                                    <div className="tp-project-details-left-content mb-35">
                                                        <h5 className="tp-project-details-left-title">Focus</h5>
                                                        {portfolio.services?.map((service) => (
                                                            <span key={service}>{service}</span>
                                                        ))}
                                                    </div>
                                                    <div className="tp-project-details-left-content mb-35">
                                                        <h5 className="tp-project-details-left-title">Timeline</h5>
                                                        <span>{portfolio.year}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="tp-project-details-right-info mb-30">
                                                    <span className="tp-project-details-subtittle d-block mb-10">{portfolio.title}</span>
                                                    <h2 className="tp-project-details-tittle mb-25">{portfolio.headline}</h2>
                                                    <p className="tp-project-details-para mb-40">{portfolio.summary}</p>
                                                    <div className="d-none d-md-flex align-items-center flex-wrap gap-3">
                                                        <Link href="/portfolio" className="tp-btn tp-btn-xl d-inline-flex align-items-center">
                                                            <span>
                                                                <span className="text-1">View all projects</span>
                                                                <span className="text-2">View all projects</span>
                                                            </span>
                                                        </Link>
                                                        {portfolio.link && (
                                                            <Link
                                                                href={portfolio.link}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                className="tp-btn tp-btn-border tp-btn-xl d-inline-flex align-items-center"
                                                            >
                                                                <span>
                                                                    <span className="text-1">View website</span>
                                                                    <span className="text-2">View website</span>
                                                                </span>
                                                            </Link>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="pt-70 pb-95">
                                                    <div className="tp-project-details-thumb fix">
                                                        <Image data-speed=".8" width={1326} height={603} className="img-fluid w-100 h-auto"
                                                            src={portfolio.image} alt={portfolio.title} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="tp-project-details-overview-box mb-70">
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <div className="tp-project-details-overview-left mb-30">
                                                                <h2 className="tp-project-details-overview-title">Overview</h2>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <div className="tp-project-details-overview-right mb-30">
                                                                <h4 className="mb-20">{portfolio.overview}</h4>
                                                                <div className="tp-project-details-overview-list">
                                                                    <ul>
                                                                        {portfolio.highlights?.map((highlight) => (
                                                                            <li key={highlight}>{highlight}</li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tp-project-details-overview-box">
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <div className="tp-project-details-overview-left">
                                                                <h2 className="tp-project-details-overview-title">Key Results</h2>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <div className="tp-project-details-result-right">
                                                                {portfolio.metrics?.map((metric) => (
                                                                    <div key={metric.label} className="tp-project-details-result">
                                                                        <h3 className="child-1">{metric.value}</h3>
                                                                        <span className="child-2">{metric.label}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                            <CommonFooter />
                        </div>
                    </div>
                </CustomCursorProvider>
            </ScrollSmoothProvider>
    );
};

export default PortfolioDetailsMain;
