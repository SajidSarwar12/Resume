import React from 'react';
import './navbar.css';


export default()=>{
    return(
        <nav className="flex desk">
            <div className="link-wrap">
                <div className="page-link">Home</div>
                <div className="page-link">About</div>
                <div className="page-link">Portfolio</div>
                <div className="page-link">Blog</div>
                <div className="page-link">Contact</div>
            </div>
        </nav>
    )
}