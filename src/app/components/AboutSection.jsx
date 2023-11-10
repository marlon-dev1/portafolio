'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <ul className="flex pl-2 list-disc">
                <div className="mr-8">
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Tailwind</li>
                    <li>Redux</li>
                </div>
                <div>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>PostgreSQL</li>
                    <li>MongoDb</li>
                </div>
            </ul>
        ),
    },
    {
        title: 'Education',
        id: 'education',
        content: (
            <ul className="pl-2 list-disc">
                <li>Platzi Master - Web Development Bootcamp</li>
                <li>Testing React with Jest and React Testing Library (RTL)</li>
            </ul>
        ),
    },
    // {
    //     title: 'Certifications',
    //     id: 'certifications',
    //     content: (
    //         <ul className="pl-2 list-disc">
    //             <li>AWS Cloud Practitioner</li>
    //             <li>Google Professional Cloud Developer</li>
    //         </ul>
    //     ),
    // },
];

const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white" id="about">
            <div className="items-center gap-8 px-4 pt-16 md:grid md:grid-cols-2 xl:gap-16 sm:pt-24 xl:px-16">
                <Image src="/images/about-image.png" width={500} height={500} />
                <div className="flex flex-col h-full mt-4 text-left md:mt-0">
                    <h2 className="mb-4 text-4xl font-bold text-white">About Me</h2>
                    <p className="text-base lg:text-lg">
                        I am a full stack web developer with a passion for creating interactive and responsive web
                        applications. I have experience working with JavaScript, React, Redux, Node.js, Express,
                        PostgreSQL, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my
                        knowledge and skill set. I am a team player and I am excited to work with others to create
                        amazing applications.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>
                            {' '}
                            Skills{' '}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>
                            {' '}
                            Education{' '}
                        </TabButton>
                        {/* <TabButton
                            selectTab={() => handleTabChange('certifications')}
                            active={tab === 'certifications'}
                        >
                            {' '}
                            Certifications{' '}
                        </TabButton> */}
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
