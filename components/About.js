import Image from 'next/image'
import JsLogo from '../src/img/js.webp'
import CmsLogo from '../src/img/GearCog.webp'
import FrontEnd from '../src/img/Pencils.webp'

import { useEffect, useRef } from 'react'


const About = (props) => {

    const inputRef = useRef();
    
    useEffect(() => {
        window.addEventListener("scroll", scrollHandler, true);
        return () => {
        window.removeEventListener("scroll", scrollHandler, true);
        };
    }, []);

    const scrollHandler = _ => {
        let top = inputRef.current.getBoundingClientRect().top
        if(top <= 15)
            props.setDarkMode(true)
        else
            props.setDarkMode(false)
    }
    
    return (
        <div ref={inputRef} id="about" className="aboutMe homepageSection" >
            <div className="container">
                <h2>About Me</h2>
                <hr />
                <p>Hey! I&apos;m a web developer in the northwest suburbs of Chicago, IL. I specialize in ReactJS and other Javascript-based frameworks. I also have extensive experience in Content Management Systems such as Craft CMS, WordPress, Shopify, and more. I&apos;m available to help you build the website/application of your dreams or help you fix various technical issues you may be experiencing.</p>
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
                    <p>Client-side scripting using Javascript libraries/frameworks such as ReactJS, NextJS, jQuery, and NodeJS.</p>
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
    )
}

export default About