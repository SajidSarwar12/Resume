import React from 'react';
import './contact.css';



export default()=>{
    return(
        <section>
            <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" className="svgcolor-light">
          <path d="M0 0 L50 100 L100 0 Z" fill="#f5f5f5" stroke="#f5f5f5"></path>
        </svg>
            <div className="container flex">
                <div className=" header waypoint">CONTACT</div>
                <div className="header-bar waypoint"></div>
                <div className="highlight waypoint">Have a Question or want to work togather?</div>
                <form className="waypoint" id="contact-form">
                    <input placeholder="Name" type="text" name="name"></input>
                    <input placeholder="Enter email" type="email" name="email" required=""></input>
                    <textarea placeholder="Your Message" type="text" name="message"></textarea>

                    <input className="button" type="submit" id="submit" value="SUBMIT"></input>
                </form>
            </div>
        </section>
    )
}