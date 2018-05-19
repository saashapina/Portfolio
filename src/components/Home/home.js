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
            
              <div className="text-container">
              <div className="newtext" data-aos="fade-down" data-aos-delay="200">
                <h1 className="text" style={colorwhite} >SaaSha</h1>
                <h4 className="text2">Full-Stack Software Developer | Ninja | Life Enthusiast</h4>
                </div>
              </div>
                <p className="quote" data-aos="fade-down" data-aos-delay="800">i would love to change the world, but they won't give me the source code</p>
          </div>    
        </body>
        )
    }

}

export default Home;