import React, { useState } from 'react';
import BlogData from '../../data/blog';
import Modal from 'react-modal';
import './blog.css';

Modal.setAppElement("#root");
const Blog = () => {
    const [blogInfo,setBlogInfo] = useState(BlogData);
    // const [modalData,setModalData] = useState(updateModal);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    return (
        <div className="blogs">
            <div className="section-title">Blogs</div>
            <div className="blog-container">
                <div className="recent-blog">Recent Blogs</div>
                {blogInfo.map((item)=>{
                    return (<div className="blog-card" key={item.id}>
                        <div className="blog-img">
                            <img src={item.image} alt="blog image"/>
                        </div>
                        <div className="blog-content">
                            <div className="content-container">
            `                   <div className="blog-title">{item.title}</div>
                                <div className="inner-content">
                                    {item.content}
                                </div>
                                <button 
                                    className="read" 
                                    onClick={() => {setModalIsOpen(true);}}>
                                        Read More
                                </button>
                                
                            </div>
                        </div>
                        <Modal isOpen={modalIsOpen}>
                            <div className="modal-container"> 
                                <i class="fi-rr-shield-exclamation"></i>
                                <div> 
                                    This is Dummy Blog. Content will be available when Blog is published.
                                </div>
                                <div>
                                    <button onClick={() => setModalIsOpen(false)} className="modal-close-btn">Click close</button>
                                </div>
                            </div>
                            
                        </Modal>
                    </div>)
                })}
                {/* <div className="blog-card">
                    <div className="blog-img">
                        <img src="https://miro.medium.com/max/1400/1*GcTlFealiG5MXFUV4tvC4A.png" alt="blog image"/>
                    </div>
                    
                    <div className="blog-content">
                        <div className="content-container">
        `                   <div className="blog-title">How to refactor your code</div>
                            <div className="inner-content">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique velit voluptas a dolore minima sapiente doloremque excepturi nostrum atque, perspiciatis quod debitis optio ipsam repellendus corrupti, odio consequatur impedit reprehenderit.<button>Read More</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="blog-card">
                    <div className="blog-img">
                        <img src="https://miro.medium.com/max/1400/1*GcTlFealiG5MXFUV4tvC4A.png" alt="blog image"/>
                    </div>
                    
                    <div className="blog-content">
                        <div className="content-container">
        `                   <div className="blog-title">How to refactor your code</div>
                            <div className="inner-content">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique velit voluptas a dolore minima sapiente doloremque excepturi nostrum atque, perspiciatis quod debitis optio ipsam repellendus corrupti, odio consequatur impedit reprehenderit.<button>Read More</button>
                            </div>
                        </div>
                        
                    </div> 
                </div>*/}
                
            </div>
            {/* <div className="morebtn"><a href="#"><i class="fi-rr-plus"></i></a></div> */}
        </div>
    );
}

export default Blog;
