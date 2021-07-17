import React, {Component} from 'react'
import './contact.css';

export default class Contact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             email:'',
             message:''
        };

    }
    
    render() {
        return (
            <div className="contact">
                <div className="section-title">Get In Touch</div>
                <div className="contact-container">
                    <div className="address-part">
                        <div className="address-part-container">
                        <div className="address-overlay"></div>
                            {/* <div>
                                <img src="https://media.giphy.com/media/3o7qEafilDT4pzfniM/giphy.gif" alt='gif'/>
                            </div> */}
                            <address>
                                <i class="fi-rr-building"></i>
                                Room no-205, A-wing, Riddhi Siddhi Apartment, Shirgaon,  Bhoslenagar, Badlapur(East)
                            </address>
                            <div className="callme">
                                <a href="tel:+91-810-446-1406">
                                <i class="fi-rr-smartphone"></i>
                                +91-8104461406</a>
                            </div>
                            <div className="mailme">
                                <a href = "mailto:jhap44033@gmail.com">
                                <i class="fi-rr-envelope"></i>
                                jhap44033@gmail.com</a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="contact-part">
                        <div className="contact-part-title">Let's talk</div>
                        <div className='form-container'>
                            <form className="form">
                                
                                <input
                                    type="text" placeholder="name"
                                />
                                <input
                                    type="email" placeholder="email address"
                                />
                                <input
                                    type="text" placeholder="subject"
                                />
                                <textarea
                                    rows="4"
                                    cols="30"
                                    minlength="3" placeholder="message"
                                />
                                <input type="submit" value="Send" className="submitbtn" />
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

