import React from 'react'
import './home.css';

const colorwhite = {
  color: 'white'
}

class Home extends React.Component {


    render() {
        return (
        <body className="home-page">
          <div className="bg"> 
            
<<<<<<< HEAD
              <div className="text-container fadingin">
                <div className= "new-text hvr-shutter-out-horizontal">
                <h1 className="text" style={colorwhite} >SaaSha</h1>
                <h4 className="text2">Full-Stack Software Developer | Ninja | Life Enthusiast</h4>
                </div>
=======
              <div className="text-container">
                <div className="newtext" data-aos="fade-down" data-aos-delay="200">
                  <h1 className="text" style={colorwhite} >SaaSha</h1>
                  <h4 className="text2">Full-Stack Software Developer | Ninja | Life Enthusiast</h4>
                </div>
                <div class="scrolltxt">Scroll Down</div>
                <div class="arrow bounce"></div>

>>>>>>> 96e1521f322ce90bb8c1ad18ca80cfcd88febb10
              </div>
                <p className="quote" data-aos="fade-down" data-aos-delay="800">i would love to change the world, but they won't give me the source code</p>
          </div>    
        </body>
        )
    }

}

export default Home;