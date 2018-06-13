import React from 'react';
import './home.css';
import TypeWriter from 'react-typewriter';

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
                  <TypeWriter className="text2" typing={1}>Full-Stack Software Developer | Ninja | Life Enthusiast</TypeWriter>
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