import { PageParamsProps } from '@/types/custom-dt';
import { redirect } from 'next/navigation';

export async function generateMetadata(props: PageParamsProps) {
    await props.params;
    return {
        title: "Redirecting...",
    };
}

export default async function BlogDetails(props: PageParamsProps) {
    await props.params;
    redirect('/portfolio');
}
