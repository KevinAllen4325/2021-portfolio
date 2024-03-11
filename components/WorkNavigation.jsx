import { useState } from 'react';

const WorkNavigation = (props) => {
    const [activeFilter, setActiveFilter] = useState("All");

    const handleItemClick = (item) => {
        setActiveFilter(item);
        props.setWorkItem(item);
    };

    return (
        <div className="workNav">
            <p className={`navItem ${activeFilter === "All" ? "active" : ""}`} onClick={() => handleItemClick("All")}>All</p>
            <p className={`navItem ${activeFilter === "Craft" ? "active" : ""}`} onClick={() => handleItemClick("Craft")}>Craft</p>
            <p className={`navItem ${activeFilter === "WordPress" ? "active" : ""}`} onClick={() => handleItemClick("WordPress")}>WordPress</p>
            <p className={`navItem ${activeFilter === "Shopify" ? "active" : ""}`} onClick={() => handleItemClick("Shopify")}>Shopify</p>
            <p className={`navItem ${activeFilter === "React" ? "active" : ""}`} onClick={() => handleItemClick("React")}>React</p>
        </div>
    );
};

export default WorkNavigation;
