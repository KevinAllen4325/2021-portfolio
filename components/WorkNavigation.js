import { useState } from 'react'

const WorkNavigation = (props) => {

    const [filter, setFilter] = useState("All")

    return (
        <div className="workNav">
            <p className={`navItem ${filter === "All" ? "active" : ""}`} 
            onClick={() => {
            setFilter("All")
            props.setWorkItem("All")
        }}>All</p>
            <p className={`navItem ${filter === "Craft" ? "active" : ""}`} 
            onClick={() => {
            setFilter("Craft")
            props.setWorkItem("Craft")
        }}>Craft</p>
            <p className={`navItem ${filter === "WordPress" ? "active" : ""}`} 
            onClick={() => {
            setFilter("WordPress")
            props.setWorkItem("WordPress")
        }}>WordPress</p>
        <p className={`navItem ${filter === "Shopify" ? "active" : ""}`} 
            onClick={() => {
            setFilter("Shopify")
            props.setWorkItem("Shopify")
        }}>Shopify</p>
        <p className={`navItem ${filter === "React" ? "active" : ""}`} 
        onClick={() => {
        setFilter("React")
        props.setWorkItem("React")
        }}>React</p>
        </div>
    )
}

export default WorkNavigation
