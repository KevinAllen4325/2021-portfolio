import { useState } from 'react';

const WorkNavigation = (props) => {
    const [filter, setFilter] = useState("All");

    const handleItemClick = (item) => {
        setFilter(item);
        props.setWorkItem(item);
    };

    return (
        <div className="workNav">
            <p className={`navItem ${filter === "All" ? "active" : ""}`} onClick={() => handleItemClick("All")}>All</p>
            <p className={`navItem ${filter === "Craft" ? "active" : ""}`} onClick={() => handleItemClick("Craft")}>Craft</p>
            <p className={`navItem ${filter === "WordPress" ? "active" : ""}`} onClick={() => handleItemClick("WordPress")}>WordPress</p>
            <p className={`navItem ${filter === "Shopify" ? "active" : ""}`} onClick={() => handleItemClick("Shopify")}>Shopify</p>
            <p className={`navItem ${filter === "React" ? "active" : ""}`} onClick={() => handleItemClick("React")}>React</p>
        </div>
    );
};

export default WorkNavigation;
