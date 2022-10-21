import React from 'react';
import './contact.css';
// import { useForm } from 'react-hook-form';

// form code

//  const {  handleSubmit,watch} = useForm();
//  const onSubmit = data => console.log(data);
//  const message = watch('message') || "";
//  const messageCharsLeft = 1500 - message.length;




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
                <form className="waypoint" id="contact-form" >
                    
                    {/* {errors.name && errors.name.type === "required" && (
                    <div role="alert">Name is required<br/></div>
                    )} */}
                    <input placeholder="Name" type="text" name="name" 
                        // maxLength='30'
                        // aria-invalid={errors.name ? "true" : "false"}
                        ></input>

                    {/* {errors.email && errors.email.type === "required" && (
                    <div role="alert">Email is required<br/></div>
                    )} */}
                    <input placeholder="Enter email" type="email" name="email"
                        // maxLength='30'
                        // aria-invalid={errors.email ? "true" : "false"}
                       ></input>

                    {/* {errors.message && errors.message.type === "required" && (
                    <div role="alert">Message is required<br/></div>
                    )} */}
                    <textarea placeholder="Your Message" type="text" name="message" 
                        // maxLength='30'
                        // aria-invalid={errors.message ? "true" : "false"}
                        ></textarea>
                    {/* <p className='message-chars-left'>{messageCharsLeft}</p> */}

                    <input className="button" type="submit" id="submit" value="Send"></input>
                </form>
            </div>
        </section>
    )
}