import React, {useState} from 'react';
import Layout from '../../components/layout';
import Banner from '../../components/banner/banner';
import Navbar from '../../components/navbar/navbar';
import About from '../../components/about/about';
import Skills from '../../components/skills/skills';
import Contact from '../../components/contact/contact';
import '../../assets/styles/globalStyles.css';

export default () => {
    const [userName, setUserName]= useState("Sajid");
    const [data,setData]=useState("Sarwar");
    // method
    const shoaibCharsi=()=>{
        setData("Profile Name updated to sajid sarwar charsi");
    }
    return (
            <Layout>
                <Banner/>
                <Navbar/>
                <About userName={userName}  setUserName={setUserName} 
                    data={data} setData={setData}
                    profileName="Mohammad Shoaib"
                    sajidCharsi={shoaibCharsi}
                />
                <Skills/>
                <Contact/>
            </Layout>
    )
}