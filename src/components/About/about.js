<<<<<<< HEAD
import React from 'react'
import './about.css';
import aos from 'aos';
import propic from './saashp.png';

class About extends React.Component {


    render() {
        return (
        <body className="about-page">
          <div className="ab-bg"> 
          
              <div className="ab-text-container">
                
                <h1 className="ab-text" data-aos="flip-side" >About Me</h1>
                <img className="pic" src={propic} alt="propic"/>
                <div className="ab-text2"> 
                    <p>Hello world, I'm SaaSha. 👋🏽
                        <br/>
                        <br/>
                        I'm a Full-Stack Software Developer based in Miami, FL and Boston, MA. 
                        Outside of coding, I enjoy hiking high mountains, learning japanese, binge watching anime, practicing yoga, and capoeira flipping🤸🏽‍.
                        <br/>
                        My work is entirely responsive and is inspired by seamless navigation, cinematography and clean user-friendly UI.
                        {/* I'm truly passionate about making the world a better place with <span className="highlight">Tech</span>, <span className="highlight">Innovation</span>, and <span className="highlight">Open-Source</span>,  
                        by harnessing untapped <span className="highlight">DIVERSITY</span> in the tech field. */}
                        <br/>
                        <br/>
                        <p className="line">...this site has been hand coded from scratch with ReactJS, by me.</p> 
                    </p>
                    
                </div>
              </div>
               
          </div>    
        </body>
        )
    }

}

=======
import React from 'react'
import './about.css';
import propic from './saashp.png';
import AOS from 'aos';

class About extends React.Component {

    componentDidMount() {
        AOS.init({
            duration : 2000
          })
    }
    render() {
        return (
        <body className="about-page">
          <div className="ab-bg"> 
          
              <div className="ab-text-container" >
                <div className="textytext hvr-shutter-out-horizontal">
                <h1 className="ab-text" data-aos="fade-down">About Me</h1>
                <img className="pic" src={propic} alt="propic" data-aos="fade-down" data-aos-delay="200" />
                <div className="ab-text2" data-aos="fade-up" data-aos-delay="400"> 
                    <p>Hello world, I'm SaaSha. 👋🏽
                        <br/>
                        <br/>
                        I'm a Full-Stack Software Developer based in Miami, FL and Boston, MA. 
                        Outside of coding, I enjoy hiking high mountains, cuddling with my dogs, learning japanese, practicing yoga, and capoeira flipping🤸🏽‍.
                        <br/>
                        My work is entirely responsive and is inspired by seamless navigation, cinematography and clean user-friendly UI.
                        {/* I'm truly passionate about making the world a better place with <span className="highlight">Tech</span>, <span className="highlight">Innovation</span>, and <span className="highlight">Open-Source</span>,  
                        by harnessing untapped <span className="highlight">DIVERSITY</span> in the tech field. */}
                        <br/>
                        <br/>
                        <p className="line">...this site has been hand coded from scratch with ReactJS, by me.</p> 
                    </p>
                </div>
                </div>
              </div>
               
          </div>    
        </body>
        )
    }

}

>>>>>>> 96e1521f322ce90bb8c1ad18ca80cfcd88febb10
export default About;