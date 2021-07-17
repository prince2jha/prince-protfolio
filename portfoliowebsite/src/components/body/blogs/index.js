import React from 'react';
import './blog.css';
const Blog = () => {
    return (
        <div className="blogs">
            <div className="section-title">Blogs</div>
            <div className="blog-container">
                <div className="recent-blog">Recent Blogs</div>
                <div className="blog-card">
                    <div className="blog-img">
                        <img src="https://miro.medium.com/max/1400/1*GcTlFealiG5MXFUV4tvC4A.png" alt="blog image"/>
                    </div>
                    
                    <div className="blog-content">
                        <div className="content-container">
        `                   <div className="blog-title">How to refactor your code</div>
                            <div className="inner-content">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique velit voluptas a dolore minima sapiente doloremque excepturi nostrum atque, perspiciatis quod debitis optio ipsam repellendus corrupti, odio consequatur impedit reprehenderit.<a href="#">Read More</a>
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
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique velit voluptas a dolore minima sapiente doloremque excepturi nostrum atque, perspiciatis quod debitis optio ipsam repellendus corrupti, odio consequatur impedit reprehenderit.<a href="#">Read More</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            <div className="morebtn"><a href="#"><i class="fi-rr-plus"></i></a></div>
        </div>
    );
}

export default Blog;
