import React from 'react';
import './ContactMe.css';
export default function ContactMe() {
  return (
    <div className="contact-container " id="contactme">
        <h2 className="section-title">Contact Me</h2>
        <hr className="hr"></hr>
        <p className="section-subtitle">Lets keep in touch</p>
        <div className="background-black">
            <div className="heading">
                <h1>Get In Touch</h1>
            </div>
            <div className='colz-icon'>
              <a href='#'>
                <i className='fa fa-facebook-square'></i>
              </a>
              <a href='#'>
                <i className='fa fa-google-plus-square'></i>
              </a>
              <a href='#'>
                <i className='fa fa-instagram'></i>
              </a>
              <a href='#'>
                <i className='fa fa-youtube-square'></i>
              </a> 
              <a href='#'>
                <i className='fa fa-twitter'></i>
              </a> 
            </div> 

        <div className="texts">
            <p>Send Your Email Here...</p>
        </div>
        <div className='mailz'>
        <img src={require("../../assets/Home/mailz.jpeg")} 
            alt='no internet connection'
            />
        </div>
            <div className='details'>
                <div className="inputs">
                    <form>
                        <label for="name">Name</label>
                        <br/>
                        <input type="text" id="name" name="name"/>
                        <br/>
                        <br/>
                        <label for="email">Email</label>
                        <br/>
                        <input type="text" id="email" name="email"/>
                        <br/>
                        <br/>
                        <label for="message">Message</label>
                        <br/>
                        <textarea id="message" name="message"/>
                        <br/>
                        <br/>
                        <button type="submit">Send </button>
                    </form>
                </div>
            </div>  
        </div>
    </div>
  )
}
