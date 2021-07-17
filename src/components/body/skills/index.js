import React from 'react';
import './skill.css';
function Skills() {
    return (
        <div class="skills">
            <div className="section-title">Skills</div>
            <div className="skill-container">
                <div className="technologies">
                    <div className="html">
                        HTML
                        <div className="html-container">
                            <div className="html-in in-edit">85%</div>
                        </div>
                    </div>
                    <div className="css">
                    CSS
                        <div className="css-container">
                            <div className="css-in in-edit">80%</div>
                        </div>
                    </div>
                    <div className="javascript">
                    Javascript
                        <div className="javascript-container">
                            <div className="javascript-in in-edit">70%</div>
                        </div>
                    </div>
                    <div className="react">
                    React
                        <div className="react-container">
                            <div className="react-in in-edit">70%</div>
                        </div>
                    </div>
                    <div className="python">
                    Python
                        <div className="python-container">
                            <div className="python-in in-edit">50%</div>
                        </div>
                    </div>
                    <div className="java">
                    Java
                        <div className="java-container">
                            <div className="java-in in-edit">50%</div>
                        </div>
                    </div>   
                    
                </div>
                <div className="education-experience">
                    <div className="education">
                        <div className="education-title">Education</div>
                        <div className="education-container">
                            <ul>
                                <li>
                                    <div className="class-title"><i class="fi-rr-rocket"></i>SSC-(10th)</div>
                                    <div className="institute">Vivekanand Sankul High School</div>
                                    <div className="grades">66%</div>
                                </li>
                                <li>
                                    <div className="class-title">
                                    <i class="fi-rr-rocket"></i>HSC-(12th)</div>
                                    <div className="institute">Terna Vidyalaya Jr. College</div>
                                    <div className="grades">53%</div>
                                </li>
                                <li>
                                    <div className="class-title">
                                    <i class="fi-rr-rocket"></i>BSc.IT-(Graduation)</div>
                                    <div className="institute">Smt. CHM College</div>
                                    <div className="grades">8.5 CGPA</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="education">
                        <div className="education-title">Experience</div>
                        <div className="education-container">
                            <ul>
                                <li>
                                    <div className="class-title"><i class="fi-rr-dart"></i>SSC-(10th)</div>
                                    <div className="institute">Vivekanand Sankul High School</div>
                                    <div className="grades">66%</div>
                                </li>
                                <li>
                                    <div className="class-title"><i class="fi-rr-dart"></i>HSC-(12th)</div>
                                    <div className="institute">Terna Vidyalaya Jr. College</div>
                                    <div className="grades">53%</div>
                                </li>
                                <li>
                                    <div className="class-title"><i class="fi-rr-dart"></i>BSc.IT-(Graduation)</div>
                                    <div className="institute">Terna Vidyalaya Jr. College</div>
                                    <div className="grades">8.5 CGPA</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
