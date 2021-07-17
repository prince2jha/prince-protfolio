import React from 'react';
import ProjectCard from './projectcard/index.js';
import { ProjectData } from '../../data/projects';
import './project.css'
function Projects() {
    const data = ProjectData;
    return (
        <section className="projects">
            <div className="section-title">Projects</div>
            <div className="project-container">
                {data.map((project)=>{
                    return(
                        <div>
                            <ProjectCard projectinfo={[project.title,project.demo,project.github,project.tags,project.about]}proimg={project.image}/>
                        </div>
                    );   
                })}
            </div>
        </section>
    );
}

export default Projects;
