import React from 'react'
import './about.css';
import propic from './saashp.png';

class About extends React.Component {


    render() {
        return (
        <body className="about-page">
          <div className="ab-bg"> 
          
              <div className="ab-text-container">
                
                <h1 className="ab-text">About Me</h1>
                <img className="pic" src={propic} alt="propic"/>
                <div className="ab-text2"> 
                    <p>Hello world, I'm SaaSha. I'm a Full-Stack Software Developer based in Miami, FL and Boston, MA. 
                        Outside of coding, I enjoy hiking high mountains, learning japanese, binge watching anime, practicing yoga, and capoeira flipping. 
                        I specialize in creating beautiful entirely Responsive web pages, that have a simplistic flowing UI. 
                        I'm truly passionate about making the world a better place with <span className="highlight">Tech</span>, <span className="highlight">Innovation</span>, and <span className="highlight">Open-Source</span>,  
                        by harnessing untapped <span className="highlight">DIVERSITY</span> in the tech field.
                        <br/><p className="line">...oh! and this site has been handtyped from scratch with ReactJS, by me (^-^) </p>
                        </p>
                    
                </div>
              </div>
               
          </div>    
        </body>
        )
    }

}

export default About;