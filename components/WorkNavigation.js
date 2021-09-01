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
            <p className={`navItem ${filter === "CMS" ? "active" : ""}`} 
            onClick={() => {
            setFilter("CMS")
            props.setWorkItem("CMS")
        }}>CMS</p>
            <p className={`navItem ${filter === "React" ? "active" : ""}`} 
            onClick={() => {
            setFilter("React")
            props.setWorkItem("React")
        }}>React</p>
            {/* <p className={`navItem ${filter === "NodeJS" ? "active" : ""}`} 
            onClick={() => {
            setFilter("NodeJS")
            props.setWorkItem("NodeJS")
        }}>NodeJS</p> */}
        </div>
    )
}

export default WorkNavigation
