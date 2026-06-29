export interface ProjectMetric {
    value: string,
    label: string,
}

export interface projectDt {
    id: number,
    title: string,
    image: string,
    category?: string,
    categories?:string[];
    year: string,
    client?: string,
    role?: string,
    services?: string[],
    headline?: string,
    summary?: string,
    overview?: string,
    highlights?: string[],
    metrics?: ProjectMetric[],
    link?: string,
}
