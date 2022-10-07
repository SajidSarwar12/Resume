import React from 'react';
import './skills.css';


export default () => {
    return (
        <section className="flex" id="portfolio">
            <div className="header waypoint">PROJETS</div>
            <div className="header-bar"></div>
            <div className="filter-wrap waypoint">
                <div className="flex row">
                    <div className="filter active">All</div>
                    <div className="filter">React</div>
                    <div className="filter">Javascript</div>
                    <div className="filter">Bootstrap</div>
                    <div className="filter">Vue</div>
                </div>
                <div className="float-bar" style={ { width: "116px" , left:"25px" }}>
                    <div className=" flex row" style={{ left: "-25px" }}>
                        <div className="filter">All</div>
                        <div className="filter">React</div>
                        <div className="filter">Javascript</div>
                        <div className="filter">Bootstrap</div>
                        <div className="filter">Vue</div>
                    </div>
                </div>
            </div>

            <div id="gallery" className=" container flex row wrap">
                <div className=" mix react" data-my-order="1" style={{display: 'block'}} data-bound>
                    <div>
                        <div className="card"></div>
                        <div className="text">
                            <div className="bold">ChowNow Ordering</div>
                            <div className="highlight">ReactJs/Python</div>
                        </div>
                        <div className="button" id="ordering">Learn More</div>
                    </div>
                </div>

                <div className=" mix react" data-my-order="1" style={{display: 'block'}}>
                    <div>
                        <div className="card"></div>
                        <div className="text">
                            <div className="bold">ChowNow Ordering</div>
                            <div className="highlight">ReactJs/Python</div>
                        </div>
                        <div className="button" id="ordering">Learn More</div>
                    </div>
                </div>

                <div className=" mix react" data-my-order="1" style={{display: 'block'}}>
                    <div>
                        <div className="card"></div>
                        <div className="text">
                            <div className="bold">ChowNow Ordering</div>
                            <div className="highlight">ReactJs/Python</div>
                        </div>
                        <div className="button" id="ordering">Learn More</div>
                    </div>
                </div>

                <div className=" mix react" data-my-order="1" style={{display: 'block'}}>
                    <div>
                        <div className="card"></div>
                        <div className="text">
                            <div className="bold">ChowNow Ordering</div>
                            <div className="highlight">ReactJs/Python</div>
                        </div>
                        <div className="button" id="ordering">Learn More</div>
                    </div>
                </div>

                <div className=" mix react" data-my-order="1" style={{display: 'block'}}>
                    <div>
                        <div className="card"></div>
                        <div className="text">
                            <div className="bold">ChowNow Ordering</div>
                            <div className="highlight">ReactJs/Python</div>
                        </div>
                        <div className="button" id="ordering">Learn More</div>
                    </div>
                </div>

                <div className=" mix react" data-my-order="1" style={{display: 'block'}}>
                    <div>
                        <div className="card"></div>
                        <div className="text">
                            <div className="bold">ChowNow Ordering</div>
                            <div className="highlight">ReactJs/Python</div>
                        </div>
                        <div className="button" id="ordering">Learn More</div>
                    </div>
                </div>

                <div className=" mix react" data-my-order="1" style={{display: 'block'}}>
                    <div>
                        <div className="card"></div>
                        <div className="text">
                            <div className="bold">ChowNow Ordering</div>
                            <div className="highlight">ReactJs/Python</div>
                        </div>
                        <div className="button" id="ordering">Learn More</div>
                    </div>
                </div>

                <div className=" mix react" data-my-order="1" style={{display: 'block'}}>
                    <div>
                        <div className="card"></div>
                        <div className="text">
                            <div className="bold">ChowNow Ordering</div>
                            <div className="highlight">ReactJs/Python</div>
                        </div>
                        <div className="button" id="ordering">Learn More</div>
                    </div>
                </div>

                <div className=" mix react" data-my-order="1" style={{display: 'block'}}>
                    <div>
                        <div className="card"></div>
                        <div className="text">
                            <div className="bold">ChowNow Ordering</div>
                            <div className="highlight">ReactJs/Python</div>
                        </div>
                        <div className="button" id="ordering">Learn More</div>
                    </div>
                </div>

                
            </div>
        </section>
    )
}