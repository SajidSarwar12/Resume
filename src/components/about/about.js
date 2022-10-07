import React, { useState } from 'react';
import '../../assets/styles/globalStyles.css';
import MeImage from '../../assets/images/me.png';
import './about.css';


export default (props) => {
    let { userName, setUserName, data, setData, profileName, sajidCharsi } = props;


    return (

        <div className="container flex">
            <div className="header">ABOUT</div>
            <div className="header-bar"></div>
            {/* about upper */}
            <div className="flex row label-wrap p-3">
                <div className="flex row-gt-sm">
                    <div className="flex bullet-wrap">
                        <div className="hex-wrap1"></div>
                        <div className="waypoint">
                            <div className="label bold">Web Developer</div>
                            <div><p>"A Software engineer by passion and profession, I love to go by standards and follow the estabished practices for clean coding, ie W3C. I enjoy developing eye-catching websites with commendable UX trends of the time. 
I believe if your website is not ranking on 1st page of gogle, you dont need to have one"</p></div>
                        </div>
                    </div>
                    <div className="flex bullet-wrap">
                        <div className="hex-wrap2"></div>
                        <div className="waypoint">
                            <div className="label bold">Web Designer</div>
                            <div><p>"Beside my Development abilities, I love to play around design tools and have hands on experience with graphics and UI design with Adobe suite specifically Adobe Illustrator, Photoshop and XD. Having experience with design tools saves me the time to wait for my designers and i can create what i want on the go."</p></div>
                        </div>
                    </div>
                </div>
                
            </div>
            {/* skills upper end */}
            {/* about lower */}
            <div className="skills-wrapper flex row-gt-sm">
                <div className="flex flex-50-gt-sm waypoint">
                    <img src={MeImage} className="me"></img>
                    <div className="label bold">Who's this guy?</div>
                    <div>I am a software engineer with 1.5 year of industry experience, After spending some time in industry and with thorough analysis of issues</div>
                </div>

                {/* skills bars */}
                <div className="flex flex-50-gt-sm waypoint bars-wrap">
                    <div className="bar flex">
                        <div className="bar fill" style={{width: "90%"}}>
                           <div className="tag bold flex">Html</div>
                        </div>
                        <span>90%</span>
                    </div>

                    <div className="bar flex">
                        <div className="bar fill" style={{width: "90%"}}>
                           <div className="tag bold flex">CSS</div>
                        </div>
                        <span>90%</span>
                    </div>

                    <div className="bar flex">
                        <div className="bar fill" style={{width: "80%"}}>
                           <div className="tag bold flex">Javascript</div>
                        </div>
                        <span>80%</span>
                    </div>

                    <div className="bar flex">
                        <div className="bar fill" style={{width: "80%"}}>
                           <div className="tag bold flex">Bootstrap</div>
                        </div>
                        <span>80%</span>
                    </div>

                    <div className="bar flex">
                        <div className="bar fill" style={{width: "50%"}}>
                           <div className="tag bold flex">Materialize</div>
                        </div>
                        <span>50%</span>
                    </div>

                    <div className="bar flex">
                        <div className="bar fill" style={{width: "65%"}}>
                           <div className="tag bold flex">Foundation Zurb</div>
                        </div>
                        <span>65%</span>
                    </div>

                    <div className="bar flex">
                        <div className="bar fill" style={{width: "65%"}}>
                           <div className="tag bold flex">React</div>
                        </div>
                        <span>65%</span>
                    </div>

                    <div className="bar flex">
                        <div className="bar fill" style={{width: "50%"}}>
                           <div className="tag bold flex">JQuery</div>
                        </div>
                        <span>50%</span>
                    </div>

                    <div className="bar flex">
                        <div className="bar fill" style={{width: "60%"}}>
                           <div className="tag bold flex">MDBootstrap</div>
                        </div>
                        <span>60%</span>
                    </div>

                    <div className="bar flex">
                        <div className="bar fill" style={{width: "50%"}}>
                           <div className="tag bold flex">Docker</div>
                        </div>
                        <span>50%</span>
                    </div>
                </div>
            </div>
            {/* skills lower end */}
            <p className="aboutParagraph">
                I am a software engineer with 1.5 year of industry experience, After spending some time in industry and with thorough analysis of issues being faced in the marlet, I decided to pursue Master in computer Science with a goal oriented research direction. I plan to undertake a research on the topic of "Smart Juries" which will transform the way penal proceeding are carried out now a days
               </p>
            <button onClick={() => {
                //    setUserName("Profile Name updated to  ")
                sajidCharsi()
                // setData("")
            }}>Save</button>
            {data}
            {/* {profileName} */}
        </div>
    )
}