import React, {Component} from 'react'
import './contact.css';

export default class Contact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             fullname:'',
             email:'',
             subject:'',
             message:''
        };

    }
    // handleName=(event)=>{
    //     this.setState({
    //         name: event.target.value,
    //     });
    // }
    // handleEmail=(event)=>{
    //     this.setState({
    //         email: event.target.value,
    //     });
    // }
    // handleSubject=(event)=>{
    //     this.setState({
    //         subject: event.target.value,
    //     });
    // }
    // handleMessage=(event)=>{
    //     this.setState({
    //         message: event.target.value,
    //     });
    // }
    handleChangeAll=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    handleSubmit=(event)=>{
        // alert(this.state.name+this.state.email+this.state.subject+this.state.message)
        // alert(JSON.stringify(this.state)); //to print every thing
        if(this.state.fullname && this.state.email && this.state.subject && this.state.message){
            alert("Thank you ");
        }else{
            alert("Please fill all the fields ");
        }
        event.preventDefault();
        this.setState({
            [event.target.value]:""
        });
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
                            <form className="form" onSubmit={this.handleSubmit}>
                                
                                <input
                                    type="text" placeholder="name" value={this.state.fullname} name="fullname" onChange={this.handleChangeAll}
                                />
                                <input
                                    type="email" placeholder="email address"  value={this.state.email} name="email" onChange={this.handleChangeAll}
                                />
                                <input
                                    type="text" placeholder="subject" value={this.state.subject} name="subject" onChange={this.handleChangeAll}
                                />
                                <textarea
                                    rows="4"
                                    cols="30"
                                    minlength="3" placeholder="message" value={this.state.message} name="message" onChange={this.handleChangeAll}
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

