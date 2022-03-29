import { useRouter } from 'next/router'
import Image from 'next/image'
import Error from '../pages/404'

import Footer from '../components/Footer'
import Nav from '../components/Navigation'
import iMac from '../src/img/imacTransparent.webp'
import Head from 'next/head'

const whiteList = ["kingsley-llc", "matsui-america", "portfolio-site", "netflix-app", "jl-services", "digital-huddle", "poppies-dough"]

const Project = () => {
    const router = useRouter()
    const projectId = router.query.projectId
    const projects = require('../src/js/recentWork.json')

    if(whiteList.includes(projectId)){
        return (
            <div className="main">
                <Nav darkMode={true}/>
                <div className="projects">
                {projects.filter(project => project.Slug.includes(projectId)).map(filtered => (
                    <div key={filtered.Key} className="projectItem">
                        <Head>
                            <title>{`Recent Work | ${filtered.Name} | Kevin Allen`}</title>
                            <meta name="description" content={filtered.Overview}/>
                        </Head>
                        <div className="projectOverview">
                            <div className="container">
                                <h1>{filtered.Name}</h1>
                                <hr />
                                <p>{filtered.Overview}</p>
                                <div className="CTA">
                                    <a className="website" href={filtered.Website} target="_blank" rel="nofollow noreferrer">Website</a>
                                    {
                                        filtered.Github !== ""
                                        ? <a className="github" href={filtered.Github} target="_blank" rel="nofollow noreferrer">Github</a>
                                        : ""
                                    }
                                </div>
                            </div>
                        </div>
                        
                        <div className="projectDemo">
                            <div className="topAngle"></div>
                            <div className="container">
                            <div className="compVideo">
                            <Image
                                src={iMac}
                                alt={`Demo video of ${filtered.Name}`}
                                loading="eager"
                                onClick
                            />
                            <video autoPlay muted loop >         
                                <source src={filtered.DesktopVideo} type="video/mp4"/>       
                            </video>
                            </div>
                            {(filtered.pageSpeedPhotos) 
                            ? 
                            <div className="pageSpeedGrid">
                                {
                                  filtered.pageSpeedPhotos.map(photo => (
                                      <div 
                                        className="gridItem" 
                                        key={photo.key.toString()}
                                      >
                                            <img
                                                src={photo.src}
                                                alt={photo.alt}
                                                id={`img${photo.key}`}
                                                className="speedResults"
                                                loading="eager"
                                                width="440px"
                                                height="248px"
                                            />
                                      </div>
                                  ))
                                }
                            
                            </div>
                            :
                            ""   
                        }
                            </div>
                            <div className="bottomAngle"></div>
                        </div>
                    </div>
                ))}
                </div>
                <Footer />
            </div>
        )
    }

    if(!whiteList.includes(projectId))
        return <Error />
        
}

export default Project
