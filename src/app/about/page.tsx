import AboutMain from '@/pages/about/AboutMain';
import { profile } from '@/data/profileData';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: `About | ${profile.displayName}`,
};

const page = () => {
    return (
        <AboutMain />
    );
};

export default page;
