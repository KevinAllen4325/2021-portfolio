import Image from 'next/image';
import JsLogo from '../src/img/js.webp';
import CmsLogo from '../src/img/GearCog.webp';
import FrontEnd from '../src/img/Pencils.webp';
import { useEffect, useRef } from 'react';

const About = ({ setDarkMode }) => {
    const inputRef = useRef();

    useEffect(() => {
        const scrollHandler = () => {
            if (inputRef.current) {
                const { top } = inputRef.current.getBoundingClientRect();
                setDarkMode(top <= 15);
            }
        };

        window.addEventListener("scroll", scrollHandler, true);
        return () => {
            window.removeEventListener("scroll", scrollHandler, true);
        };
    }, [setDarkMode]);

    return (
        <div ref={inputRef} id="about" className="aboutMe homepageSection">
            <div className="container">
                <h2>About Me</h2>
                <hr />
                <p>Experienced developer with a keen focus on automation and solution architecture, specializing in custom theme development for WordPress, Shopify, and Craft CMS. Proficient in a wide array of frontend and backend technologies, including HTML, CSS, JavaScript, React, PHP, and Node.js. Skilled in Agile methodologies, project management, and fostering strong client relationships. Committed to continuous improvement, staying updated on industry trends, and delivering impactful solutions that surpass expectations.</p>
                <div className="aboutGrid">
                    <AboutItem src={JsLogo} alt="Javascript logo" title="JAVASCRIPT" description="Client-side scripting using Javascript frameworks such as ReactJS, NextJS, jQuery, and NodeJS." />
                    <AboutItem src={CmsLogo} alt="CMS Settings Cog Logo" title="CMS" description="Expertise in converting designs to WordPress, Craft CMS, Shopify, and developing custom themes." />
                    <AboutItem src={FrontEnd} alt="Front-end development logo" title="FRONT END" description="User-centered front-end development using the latest libraries, frameworks, and design patterns." />
                </div>
            </div>
        </div>
    );
};

const AboutItem = ({ src, alt, title, description }) => (
    <div className={`${title.toLowerCase()} gridItem`}>
        <Image src={src} alt={alt} width="102px" height="102px" loading="eager" />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

export default About;
