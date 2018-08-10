import React from 'react'
import './about.css';
import propic from './saashp.png';
import AOS from 'aos';
// import TypeWriter from 'react-typewriter';
import Typing from 'react-typing-animation';

class About extends React.Component {

    componentDidMount() {
        AOS.init({
            duration : 2000
          })
    }
    render() {
        return (
        <div className="about-page">
          <div className="ab-bg"> 
          
              <div className="ab-text-container" >
                <div className="textytext hvr-shutter-out-horizontal">
                <h1 className="ab-text" data-aos="fade-down">About Me</h1>
                <img className="pic" src={propic} alt="propic" data-aos="fade-down" data-aos-delay="200" />
                <div className="ab-text2" data-aos="fade-up" data-aos-delay="400"> 
                    <p>Hello world, I'm SaaSha. 👋🏽
                        <br/>
                        <br/>
                        I'm a Full Stack Software Engineer based in Miami, FL and Boston, MA. 
                        Outside of coding, I enjoy hiking high mountains, Xtreme Martial Arts, learning japanese, practicing yoga, and capoeira flipping🤸🏽‍.
                        <br/>
                        My work is entirely responsive and is inspired by seamless navigation, cinematography and clean user-friendly UI.
                        <br/>
                        <br/>
                        <Typing className="line"><Typing.Delay ms={22000}/>...this site has been hand coded and designed from scratch with ReactJS,<Typing.Delay ms={1000}/> by me.</Typing> 
                    </p>
                </div>
                </div>
              </div>
               
          </div>    
        </div>
        )
    }

}

export default About;