import Nav from './WorkNavigation';
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const workStuff = require('../src/js/recentWork.json');

const RecentWork = () => {
    const [fullWidth, setFullWidth] = useState("smallImage");
    const [workItem, setWorkItem] = useState("All");
    const [isMobile, setIsMobile] = useState(false);

    const filterWorkItems = useCallback(() => {
        return workStuff.filter(tag => tag.Tags.includes(workItem));
    }, [workItem]);

    const updateLayout = useCallback(() => {
        const windowWidth = window.innerWidth;
        setIsMobile(windowWidth <= 500);
        setFullWidth(windowWidth <= 957 ? "largeImage" : "smallImage");
    }, []);

    useEffect(() => {
        updateLayout();
        window.addEventListener("resize", updateLayout);
        return () => {
            window.removeEventListener("resize", updateLayout);
        };
    }, [updateLayout]);

    const handleNavClick = () => {
        setFullWidth("smallImage"); // Resetting fullWidth on nav click
    };

    return (
        <div id="work" className="recentWork homepageSection">
            <div className="container">
                <h2>Recent Work</h2>
                <hr />
                <Nav setWorkItem={setWorkItem} onClick={handleNavClick} />
                <div className="workGrid">
                    {filterWorkItems().map((filtered, index) => (
                        <Link key={filtered.Key} href={`/${filtered.Slug}`} passHref>
                            <div
                                className={`workItem ${index === 0 ? 'largeImage' : fullWidth}`}
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
