import React from 'react';
import '../../assets/styles/globalStyles.css';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';




export default () => {
    return (
        <div>
            <footer>
               <i className="mdi .mdi-chevron-double-up"></i>
               <div className="icon-wrap flex row">
                   <a href="www.linkedin.com">
                       <div className="flex icon" id="icon-2">
                            <FontAwesomeIcon icon={faYoutube}/>
                       </div>
                   </a>

                   <a href="https://github.com/SajidSarwar12">
                       <div className="flex icon" id="icon-2">
                           <FontAwesomeIcon icon={faGithub}/>
                       </div>
                   </a>

                   <a href="https://www.linkedin.com/in/muhammad-sajid-sarwar-946a85182/">
                       <div className="flex icon" id="icon-2">
                            <FontAwesomeIcon icon={faLinkedin} white/>
                       </div>
                   </a>

                   <a href="www.linkedin.com">
                       <div className="flex icon" id="icon-2">
                            <FontAwesomeIcon icon={faFacebook}/>
                       </div>
                   </a>
               </div>
               <div className="info-box">
                   <div className="footnote">
                       Sajid Sarwar 
                       <span className="highlight">©2022</span>
                   </div>
               </div>
            </footer>
        </div>
    )
}