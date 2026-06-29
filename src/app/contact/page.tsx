import ContactMain from '@/pages/contact/ContactMain';
import { profile } from '@/data/profileData';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: `Contact | ${profile.displayName}`,
};

const page = () => {
    return (
        <ContactMain />
    );
};

export default page;
