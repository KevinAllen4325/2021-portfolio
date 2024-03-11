import Image from 'next/image';
import JsLogo from '../src/img/js.webp';
import CmsLogo from '../src/img/GearCog.webp';
import FrontEnd from '../src/img/Pencils.webp';
import { useEffect, useRef, useCallback } from 'react';

const About = ({ setDarkMode }) => {
    const inputRef = useRef();

    const scrollHandler = useCallback(() => {
        if (inputRef.current) {
            let top = inputRef.current.getBoundingClientRect().top;
            if (top <= 15)
                setDarkMode(true);
            else
                setDarkMode(false);
        }
    }, [setDarkMode]);

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [scrollHandler]);

    return (
        <div ref={inputRef} id="about" className="aboutMe homepageSection">
            <div className="container">
                <h2>About Me</h2>
                <hr />
                <p>Experienced developer with a keen focus on automation and solution architecture, specializing in custom theme development for WordPress, Shopify, and Craft CMS. Proficient in a wide array of frontend and backend technologies, including HTML, CSS, JavaScript, React, PHP, and Node.js. Skilled in Agile methodologies, project management, and fostering strong client relationships. Committed to continuous improvement, staying updated on industry trends, and delivering impactful solutions that surpass expectations.</p>
                <div className="aboutGrid">
                    <div className="javascript gridItem">
                        <Image
                            src={JsLogo}
                            alt="Javascript logo"
                            width="102px"
                            height="102px"
                            loading="eager"
                        />
                        <h3>JAVASCRIPT</h3>
                        <p>Client-side scripting using Javascript frameworks such as ReactJS, NextJS, jQuery, and NodeJS.</p>
                    </div>
                    <div className="frontEnd gridItem">
                        <Image
                            src={CmsLogo}
                            alt="CMS Settings Cog Logo"
                            width="102px"
                            height="102px"
                            loading="eager"
                        />
                        <h3>CMS</h3>
                        <p>Expertise in converting designs to WordPress, Craft CMS, Shopify, and developing custom themes.</p>
                    </div>
                    <div className="cms gridItem">
                        <Image
                            src={FrontEnd}
                            alt="Front-end development logo"
                            width="102px"
                            height="102px"
                            loading="eager"
                        />
                        <h3>FRONT END</h3>
                        <p>User-centered front-end development using the latest libraries, frameworks, and design patterns.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
