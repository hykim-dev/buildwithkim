import CustomCursorProvider from '@/components/providers/CustomCursorProvider';
import ScrollSmoothProvider from '@/components/providers/ScrollSmoothProvider';
import HomeTextSlider from '@/components/text-slider/HomeTextSlider';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/shared/Search/SearchArea';
import HomeProject from '@/components/project/HomeProject';
import CommonHeader from '@/layouts/headers/CommonHeader';
import HomeAbout from '@/components/about/HomeAbout';
import HomeAward from '@/components/award/HomeAward';
import CounterArea from '@/components/counter/CounterArea';
import FooterOne from '@/layouts/footers/FooterOne';
import HeroOne from '@/components/hero/HeroOne';

const HomeMain = () => {
    return (
        <ScrollSmoothProvider>
            <CustomCursorProvider>
                <div id="magic-cursor" className="cursor-white-bg">
                    <div id="ball"></div>
                </div>

                {/* Global Components */}
                <BackToTop />
                <SearchArea />
                <CommonHeader />

                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>
                            <HeroOne />
                            <HomeAbout />
                            <CounterArea />
                            <HomeProject />
                            <HomeTextSlider />
                            <HomeAward />
                        </main>
                        <FooterOne />
                    </div>
                </div>
            </CustomCursorProvider>
        </ScrollSmoothProvider>
    );
};

export default HomeMain;
