import PortfolioMain from '@/pages/portfolio/PortfolioMain';
import { profile } from '@/data/profileData';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: `Projects | ${profile.displayName}`,
};

const page = () => {
    return (
        <PortfolioMain/>
    );
};

export default page;
