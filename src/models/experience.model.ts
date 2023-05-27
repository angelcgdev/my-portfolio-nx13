export interface Experience {
    id: string;
    role: string;
    company: string;
    from: string;
    to?: string;
    isCurrent: boolean;
    responsabilities: string[];
}