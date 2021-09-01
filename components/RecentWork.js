import Nav from './WorkNavigation'
import { useState } from 'react'
import Link from 'next/link'
import FlipMove from 'react-flip-move'

const workStuff = require('../src/js/recentWork.json')

const RecentWork = () => {


    const [workItem, setWorkItem] = useState("All")
    return (
        <div id="work" className="recentWork homepageSection">
            <div className="container">
            <h2>Recent Work</h2>
            <hr />
            <Nav setWorkItem={setWorkItem}/>
            <div className="workGrid">
                {
                    workStuff.filter(tag => tag.Tags.includes(workItem)).map(filtered => (
                        <Link key={filtered.Key} href={`/${filtered.Slug}`}>
                            <div className="workItem" style={{backgroundImage: `url(${filtered.HomePhoto})`}}>
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
    )
}

export default RecentWork
