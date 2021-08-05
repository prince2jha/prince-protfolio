import React from "react";
import './projectnav.css'

const ProjectNav = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="pnavbar">
        <div className="pbtn-group">
          {menuList.map((curElem) => {
            return (
              <button className="pbtn-items" onClick={() => filterItem(curElem)} key={curElem.id}>
                {curElem}
              </button>
            );
          })}          
        </div>
      </nav>
    </>
  );
};
export default ProjectNav;