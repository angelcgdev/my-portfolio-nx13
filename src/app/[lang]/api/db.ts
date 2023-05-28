import { Experience } from "@/models/experience.model";

export const experiencesEs: Experience[] = [
    {
        id: '001',
        role: 'Desarrollador Frontend',
        company: 'Corporacion Mallky',
        from: (new Date(Date.parse('2020-10-01'))).toDateString(),
        to: (new Date(Date.parse('2022-05-30'))).toDateString(),
        isCurrent: false,
        responsabilities: [],
    },
    {
        id: '002',
        role: 'Desarrollador FullStack',
        company: 'Grupo EBIM',
        from: (new Date(Date.parse('2022-06-06'))).toDateString(),
        to: (new Date(Date.parse('2022-12-15'))).toDateString(),
        isCurrent: false,
        responsabilities: [],
    },
    {
        id: '003',
        role: 'Tech Coach',
        company: 'Talently',
        from: (new Date(Date.parse('2023-03-01'))).toDateString(),
        isCurrent: true,
        responsabilities: [],
    },
    {
        id: '004',
        role: 'Desarrollador Frontend',
        company: 'Tarjetas Peruanas',
        from: (new Date(Date.parse('2023-05-22'))).toDateString(),
        isCurrent: true,
        responsabilities: [],
    },
];
export const experiencesEn: Experience[] = [
    {
        id: '001',
        role: 'Frontend Developer',
        company: 'Corporacion Mallky',
        from: (new Date(Date.parse('2020-10-01'))).toDateString(),
        to: (new Date(Date.parse('2022-05-30'))).toDateString(),
        isCurrent: false,
        responsabilities: [],
    },
    {
        id: '002',
        role: 'FullStack Developer',
        company: 'Grupo EBIM',
        from: (new Date(Date.parse('2022-06-06'))).toDateString(),
        to: (new Date(Date.parse('2022-12-15'))).toDateString(),
        isCurrent: false,
        responsabilities: [],
    },
    {
        id: '003',
        role: 'Tech Coach',
        company: 'Talently',
        from: (new Date(Date.parse('2023-03-01'))).toDateString(),
        isCurrent: true,
        responsabilities: [],
    },
    {
        id: '004',
        role: 'Frontend Developer',
        company: 'Tarjetas Peruanas',
        from: (new Date(Date.parse('2023-05-22'))).toDateString(),
        isCurrent: true,
        responsabilities: [],
    },
];