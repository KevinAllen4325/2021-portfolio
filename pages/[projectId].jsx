import { useRouter } from 'next/router';
import Image from 'next/image';
import Error from '../pages/404';
import Footer from '../components/Footer';
import Nav from '../components/Navigation';
import iMac from '../src/img/imacTransparent.webp';
import Head from 'next/head';
import { useMemo } from 'react';
import projectsData from '../src/js/recentWork.json';

const whiteList = ["kingsley-llc", "matsui-america", "portfolio-site", "netflix-app", "jl-services", "digital-huddle", "poppies-dough"];

const Project = () => {
    const router = useRouter();
    const projectId = router.query.projectId;

    const memoizedProjectsData = useMemo(() => projectsData, []); // Memoize projectsData

    const project = useMemo(() => {
        if (!projectId || !whiteList.includes(projectId)) {
            return null;
        }
        return memoizedProjectsData.find(p => p.Slug.includes(projectId));
    }, [memoizedProjectsData, projectId]);

    if (!project) {
        return <Error />;
    }

    const renderCTA = () => {
        const { Website, Github } = project;
        return (
            <div className="CTA">
                <a className="website" href={Website} target="_blank" rel="nofollow noreferrer">Website</a>
                {Github && <a className="github" href={Github} target="_blank" rel="nofollow noreferrer">Github</a>}
            </div>
        );
    };

    return (
        <div className="main">
            <Nav darkMode={true} />
            <div className="projects">
                <div key={project.Key} className="projectItem">
                    <Head>
                        <title>{`Recent Work | ${project.Name} | Kevin Allen`}</title>
                        <meta name="description" content={project.Overview} />
                    </Head>
                    <div className="projectOverview">
                        <div className="container">
                            <h1>{project.Name}</h1>
                            <hr />
                            <p>{project.Overview}</p>
                            {renderCTA()}
                        </div>
                    </div>
                    <div className="projectDemo">
                        <div className="topAngle"></div>
                        <div className="container">
                            <div className="compVideo">
                                <Image
                                    src={iMac}
                                    alt={`Demo video of ${project.Name}`}
                                    loading="eager"
                                />
                                <video autoPlay muted loop poster={project.Poster} >
                                    <source src={project.DesktopVideo} type="video/mp4" />
                                </video>
                            </div>
                            {project.pageSpeedPhotos && (
                                <div className="pageSpeedGrid">
                                    {project.pageSpeedPhotos.map(photo => (
                                        <div className="gridItem" key={photo.key.toString()}>
                                            <Image
                                                src={photo.src}
                                                alt={photo.alt}
                                                id={`img${photo.key}`}
                                                className="speedResults"
                                                loading="eager"
                                                width="440"
                                                height="248"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="bottomAngle"></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Project;
