export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const myProjects = [
    {
        title: 'ueno bank - Login with QR',
        desc: 'Developed the frontend for Ueno Bank’s new login system using QR codes, built with React.js and consuming a Spring Boot microservice. The system allows over one million clients to securely log in by scanning a QR code via the Ueno mobile app.',
        subdesc: 'Collaborated on backend development using Spring Boot. After a successful login through the mobile app, users are seamlessly redirected to the home banking interface.',
        href: 'https://hb.ueno.com.py/personas/secure',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/project-logo1.svg',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 3,
                name: 'Spring Boot',
                path: 'assets/spring-icon.svg',
            },
            {
                id: 4,
                name: 'Docker',
                path: '/assets/docker-icon.png',
            },
        ],
    },
    {
        title: 'ueno Empresas - Onboarding',
        desc: 'A seamless multi-step onboarding platform for companies, integrating microservices from Spring Boot and NestJS with secure QR login and file upload capabilities.',
        subdesc:
            "This microfrontend built with Next.js features dynamic form validation using Yup, document attachment handling, and styled components for a fully responsive experience. The process adapts to the company's type, ensuring a tailored flow from start to finish.",
        href: 'https://hb.ueno.com.py/empresas_onboarding',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo2.svg',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'Next.js',
                path: '/assets/nextjs.png',
            },
            {
                id: 2,
                name: 'JavaScript',
                path: '/assets/js-logo.png',
            },
            {
                id: 3,
                name: 'Spring Boot',
                path: 'assets/spring-icon.svg',
            },
            {
                id: 4,
                name: 'NestJS',
                path: 'assets/nestjs.svg',
            },
        ],
    },
    {
        title: 'Wedin - Event Registry (In progress...)',
        desc: 'An event registry platform designed to centralize gift management for weddings and other celebrations, allowing users to create, update, and share wishlists with guests.',
        subdesc:
            'Built with Next.js 14, Prisma, and MongoDB, Wedin offers a real-time registry where hosts can track gift progress and share event-specific links with guests. Originally for weddings, Wedin now supports all event types, offering a versatile solution for personalized gift registries.',
        href: 'https://wedin.vercel.app/regiser',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/project-logo3.svg',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'Next.js',
                path: '/assets/nextjs.png',
            },
            {
                id: 2,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 3,
                name: 'Prisma',
                path: 'assets/prisma.svg',
            },
            {
                id: 4,
                name: 'MongoDB',
                path: '/assets/mongodb-icon.svg',
            },
        ],
    },
    {
        title: 'ueno bank - Payment Alias',
        desc: 'A React webapp exclusively for Ueno Bank clients to manage their payment aliases, enabling seamless transactions across banks.',
        subdesc:
            'Built with React.js, Tailwind CSS, and react-hook-form for validation, this app allows users to assign, edit, and delete payment aliases. Powered by a Spring Boot microservice backend, the app is deployed using Docker and Nginx for optimal performance.',
        texture: '/textures/project/project4.mp4',
        logo: '/assets/project-logo1.svg',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'JavaScript',
                path: '/assets/js-logo.png',
            },
            {
                id: 3,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 4,
                name: 'Spring Boot',
                path: 'assets/spring-icon.svg',
            },
            {
                id: 5,
                name: 'Docker',
                path: '/assets/docker-icon.png',
            },
        ],
    },
    {
        title: 'ueno Empresas - Landing Website',
        desc: 'A dynamic and responsive landing page designed to showcase Ueno Empresas services with smooth animations and a modern aesthetic.',
        subdesc:
            'Developed using React.js, TypeScript, and Tailwind CSS for a fast and secure experience. Enhanced with Framer Motion for seamless transitions and hosted on WordPress Enterprise for robust content management.',
        href: 'https://www.ueno.com.py/empresas/',
        texture: '/textures/project/project5.mp4',
        logo: '/assets/project-logo2.svg',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: '/assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    }
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.20 : isMobile ? 0.18 : 0.27,
        deskPosition: isMobile ? [-0.5, -4.3, 0] : [0.25, -6.5, 0],
        cubePosition: isSmall ? [4, -8, 0] : isMobile ? [5, -5, 0] : isTablet ? [6, -9, 0] : [11, -9, 0],
        reactLogoPosition: isSmall ? [4.5, 5.4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 2, 0],
        ringPosition: isSmall ? [-9, 9, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 9, 0] : [-24, 5, 0],
        targetPosition: isSmall ? [-6, -10, -8] : isMobile ? [-9, -10, -10] : isTablet ? [-9, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'ITTI Digital',
        pos: 'Software Developer',
        duration: '2021 - Present',
        title: "Contributed to Paraguay’s first fully digital bank for over one million users, using Java/Spring Boot, NodeJS, Ruby/Rails, and React. Optimized React apps with modern features. Developed APIs, integrated Oracle and PostgreSQL, and deployed with Docker and AWS.",
        stack: "Tech Stack: React.js, Next.js, TypeScript/JavaScript, Java/Spring Boot, NodeJS, NestJS, Ruby/Rails, Docker, Oracle DB, SQL.",
        icon: '/assets/itti.png',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Metabond Blockchain Solutions',
        pos: 'Full-Stack Developer',
        duration: '2020 - 2021',
        title: "Led development of Metabond’s NFT and Launchpad platform. Improved accessibility with aria-labels and keyboard navigation. Boosted performance by cutting component rendering times 60% using React best practices.",
        stack: "Tech Stack: Next.js, TypeScript, MongoDB, Prisma, Node.js, NoSQL, Vercel, AWS S3, Solidity.",
        icon: '/assets/metabond.png',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Tiendas Maquicenter',
        pos: 'Full-Stack Developer',
        duration: '2020 - 2020',
        title: "Developed the frontend for a large e-commerce store with React, delivering a responsive experience for 5,000+ products. Collaborated on PHP/PostgreSQL backend integration, ensuring smooth operation and efficient data management.",
        stack: "Tech Stack: React.js, Redux, Axios, TailwindCSS, PHP, Laravel, PostgreSQL.",
        icon: '/assets/tiendasmaquicenter.png',
        animation: 'salute',
    },
];