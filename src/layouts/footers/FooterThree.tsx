import { getCurrentYear } from '@/utils/getCurrentYear';
import Image from 'next/image';
import Link from 'next/link';

const FooterThree = () => {
    return (
        <footer>
            <div className="tp-footer-area pb-75">
                <div className="container p-relative z-index-1">
                    <Image className="tp-hero-3-shape w-100 h-auto" width={1350} height={880} src="/assets/img/hero/hero-3/line-bg.png" alt="ling bg" />
                    <div className="row">
                        <div className="col-12">
                            <div className="tp-footer-3-content-wrap text-center">
                                <h2 className="tp-footer-3-tittle mb-110">Warm thanks!</h2>
                                <h5 className="tp-footer-3-subtittle mb-30">Have a beautiful and restful Sunday!</h5>
                                <div className="tp-footer-social mb-35 d-flex justify-content-center align-items-center">
                                    <span><Link href="#"><i className="fa-brands fa-instagram"></i></Link></span>
                                    <span><Link href="#"><i className="fa-brands fa-dribbble"></i></Link></span>
                                    <Link href="/contact" className="tp-btn d-flex justify-content-center lh-1">
                                        <span>
                                            <span className="text-1">Get in Touch</span>
                                            <span className="text-2">Get in Touch</span>
                                        </span>
                                    </Link>
                                </div>
                                <div className="tp-footer-3-copyright">
                                    <p>© {getCurrentYear()} Bfolio. All rights reserved by Aqlova.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterThree;