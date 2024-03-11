import Nav from './WorkNavigation';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const workStuff = require('../src/js/recentWork.json');

const RecentWork = () => {
    const [fullWidth, setFullWidth] = useState("smallImage");
    const [workItem, setWorkItem] = useState("All");
    const [isMobile, setIsMobile] = useState(false);

    const divCount = () => {
        const workItemCount = workStuff.filter(tag => tag.Tags.includes(workItem)).length;
        setFullWidth(workItemCount % 2 === 0 ? "largeImage" : "smallImage");
    }

    useEffect(() => {
        divCount();
        isItMobile();
        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener("resize", isItMobile);
        };
    }, [divCount]); // Include divCount in the dependency array

    const isItMobile = () => {
        if (window.innerWidth <= 957 && window.innerWidth > 500) {
            setIsMobile(false);
            setFullWidth("largeImage");
        } else if (window.innerWidth <= 500) {
            setIsMobile(true);
            setFullWidth("smallImage");
        }
    }

    const handleNavClick = () => {
        divCount();
    };

    return (
        <div id="work" className="recentWork homepageSection">
            <div className="container">
                <h2>Recent Work</h2>
                <hr />
                <Nav setWorkItem={setWorkItem} onClick={handleNavClick} />
                <div className="workGrid">
                    {workStuff.filter(tag => tag.Tags.includes(workItem)).map((filtered, index) => (
                        <Link key={filtered.Key} href={`/${filtered.Slug}`} passHref>
                            <div
                                className={`workItem ${(index === 0) ? `largeImage` : fullWidth}`}
                                style={{ backgroundImage: `url(${(fullWidth === "largeImage" && !isMobile) || (index === 0 && !isMobile) ? filtered.HomePhotoLarge : filtered.HomePhoto})` }}
                            >
                                <div className="overlay">
                                    <h4>{filtered.Name}</h4>
                                    <p>{filtered.ShortDescription}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RecentWork;
