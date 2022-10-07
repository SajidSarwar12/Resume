import React from 'react';
import '../../assets/styles/globalStyles.css';
import './footer.css';



export default () => {
    return (
        <div>
            <footer>
               <i className="mdi .mdi-chevron-double-up"></i>
               <div className="icon-wrap flex row">
                   <a href="www.linkedin.com">
                       <div className="flex icon" id="icon-2">
                           <i className="mdi mdi-linkedin"></i>
                       </div>
                   </a>

                   <a href="www.linkedin.com">
                       <div className="flex icon" id="icon-2">
                           <i className="mdi mdi-linkedin"></i>
                       </div>
                   </a>

                   <a href="www.linkedin.com">
                       <div className="flex icon" id="icon-2">
                           <i className="mdi mdi-linkedin"></i>
                       </div>
                   </a>

                   <a href="www.linkedin.com">
                       <div className="flex icon" id="icon-2">
                           <i className="mdi mdi-linkedin"></i>
                       </div>
                   </a>
               </div>
               <div className="info-box">
                   <div className="footnote">
                       Sajid Sarwar 
                       <span className="highlight">©2015</span>
                   </div>
               </div>
            </footer>
        </div>
    )
}