import React from 'react';
import './projectcard.css';

function ProjectCard({ menuData }) {
    return (
        <>
            {menuData.map((curEle) => {
                const { id, title,tags,demo,github, category, image, about } = curEle;
                return(
                    <>
                        <div className="project-card" key = {id}>
                            <div className="project-info">
                                <label className="project-title">{title}</label>
                                <img src={image} className="project-image"/>
                                <div className="project-links">
                                    {demo&&<a className="project-link" href={demo} target="_blank">
                                        <div className="link-btn"><i class="fi-rr-laptop"></i>Demo</div>
                                    </a>}
                                    {github&&<a className="project-link" href={github} target="_blank">
                                        <div className="link-btn"><i class="fa fa-code"></i>Code</div>
                                    </a>}
                                    
                                </div>
                                <div className="project-para-container">
                                    <p className="project-para">{about}</p>
                                </div>
                                <div className="project-tag-container">
                                    
                                    <div className="project-tags">
                                        {tags.map((tag)=>{
                                            return <label className="tag">{tag}</label>
                                        })}
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </>
                );
            })}  
        </>
    );
}


export default ProjectCard;
