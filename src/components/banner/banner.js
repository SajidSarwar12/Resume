
import React from 'react';
//import Typist from 'react-typist';
import './banner.css';



export default()=>{
    return(
        <div className="bannerBackground">
           <div className="bannerContent">
             
             {/* <Typist> */}
                 <h1>Hi, I am <br/><span className="name">Muhammad Sajid Sarwar</span></h1>
              <h2>Front end Developer | Reactjs</h2>
              
              {/* </Typist> */}
           </div>
           <div></div>
        </div>
    )
}