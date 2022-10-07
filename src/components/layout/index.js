import React from 'react';
import Footer from '../footer/footer';

export default (props) => {
    return (
        <div>
            
            {
                props.children
            }
            <Footer />
        </div>
    )
}