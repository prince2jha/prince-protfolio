import React,{useState} from 'react';
import ProjectCard from './projectcard/index.js';
import ProjectData from '../../data/projects';
import ProjectNav from './projectnavbar/ProjectNav.js';
import './project.css'
const uniqueList = [
  ...new Set(
    ProjectData.map((curElem) => {
      return curElem.category;
    })
  ),
  "All"
];
function Projects() {
    // const data = ProjectData;
    const [menuData, setMenuData] = useState(ProjectData);
    const [menuList, setMenuList] = useState(uniqueList);
    const filterItem = (category) => {
        if (category === "All") {
        return setMenuData(ProjectData);
        }
        const updatedList = ProjectData.filter((curElem) => {
        return curElem.category === category;
        });
        setMenuData(updatedList);
    };
    return (
        <section className="projects">
            <div className="section-title">Projects</div>
            <ProjectNav filterItem={filterItem} menuList={menuList}  />
            <div className="project-container">
                <ProjectCard menuData={menuData}/>
            </div>
            {/* <div className="morebtn"><a href="#"><i class="fi-rr-plus"></i></a></div> */}
        </section>
    );
}

export default Projects;
