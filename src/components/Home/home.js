import React from 'react';
import './home.css';
// import TypeWriter from 'react-typewriter';
import Typing from 'react-typing-animation';

const colorwhite = {
  color: 'white'
}


class Home extends React.Component {


    render() {
        return (
        <div className="home-page">
          <div className="bg"> 
            
              {/* <div className="text-container fadingin">
                <div className= "new-text hvr-shutter-out-horizontal">
                <h1 className="text" style={colorwhite} >SaaSha</h1>
                <h4 className="text2">Full-Stack Software Developer | Ninja | Life Enthusiast</h4>
                </div> */}
              <div className="text-container">
                <div className="newtext" data-aos="fade-down" data-aos-delay="200">
                  <h1 className="text" style={colorwhite} typing={1} >SaaSha</h1>
                  <Typing className="text2"><Typing.Delay ms={2500}/><span>Full-Stack Software Developer</span><Typing.Delay ms={1000}/><Typing.Backspace count={30}/> | 
                   <span> Ninja</span><Typing.Delay ms={1000}/><Typing.Backspace count={8}/> | <span>Life Enthusiast</span><Typing.Delay ms={3000}/><Typing.Backspace count={20}/> </Typing>
                </div>
                <div className="scrolltxt">Scroll Down</div>
                <div className="arrow bounce"></div>

              </div>
                <p className="quote" data-aos="fade-down" data-aos-delay="800">i would love to change the world, but they won't give me the source code</p>
          </div>    
        </div>
        )
    }

}

export default Home;