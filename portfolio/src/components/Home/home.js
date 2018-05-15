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
                <h1 className="text" style={colorwhite} >SaaSha Codes</h1>
                <h4 className="text2">Full-Stack Software Developer | Ninja | Life Enthusiast</h4>
              </div>
                <p className="quote">i would love to change the world, but they won't give me the source code</p>
          </div>    
        </body>
        )
    }

}

export default Home;