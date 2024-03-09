import { useState } from 'react'
import Link from 'next/link'


const Navigation = (props) => {

    const [showNav, setShowNav] = useState(false)
    const [display, setDisplay] = useState("none")
    const [opacity, setOpacity] = useState(0)

    //Toggle menu and icon change
    const toggle = () => {
        if (display === "none") {
            setDisplay("block")
            setShowNav(true)
            setTimeout(() => {
                setOpacity(1)
            }, 0);
        }
        if (display === "block") {
            setOpacity(0)
            setShowNav(false)
            setTimeout(() => {
                setDisplay("none")
            }, 250)
        }
    }

    return (
        <div id="navigation" className={props.darkMode === true ? "darkMode" : ""}>
            <div className={`navMenu ${showNav ? "active" : ""}`}>
                <label htmlFor="check" >
                    <input type="checkbox" id="check" onChange={toggle} />
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
            <nav
                style={{
                    transition: 'opacity 0.3s ease',
                    opacity: opacity,
                    display: display
                }}
            >
                <div className="navItems" onClick={toggle}>
                    <Link className="navItem" href="/">Home</Link>
                    <Link className="navItem" href="/#about">About</Link>
                    <Link className="navItem" href="/#work">Work</Link>
                    <Link className="navItem" href="/#contact-me">Contact</Link>
                    <a href="/pdf/KevinOneillResume.pdf" target="_blank">Resume</a>
                </div>
            </nav>
        </div>
    )
}

export default Navigation
