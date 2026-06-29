import PortfolioDetailsMain from '@/pages/portfolio-details/PortfolioDetailsMain';
import projectData from '@/data/projectData';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: `${projectData[0]?.title ?? "Project"} | Project Details`,
};


const page = () => {
    return (
       <PortfolioDetailsMain id={1} />
    );
};

export default page;
