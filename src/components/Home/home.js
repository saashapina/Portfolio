import React from "react";
import "./home.css";
// import TypeWriter from 'react-typewriter';
import Typing from "react-typing-animation";

const colorwhite = {
  color: "white"
};

class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div className="bg">
          <div className="text-container">
            <div className="newtext" data-aos="fade-down" data-aos-delay="200">
              <h1 className="text" style={colorwhite} typing={1}>
                SaaSha Pina
              </h1>
              <Typing className="text2">
                <Typing.Delay ms={2500} />
                <span>Front End Engineer</span>
                <Typing.Delay ms={1500} />
                <Typing.Backspace count={18} />
                <span>Visionary</span>
                <Typing.Delay ms={1500} />
                <Typing.Backspace count={9} />
                <span>...Ninja</span>
                <Typing.Delay ms={2000} />
                <Typing.Backspace count={8} />
                Front End Engineer & Visionary <br /> (but also, secretly a
                Ninja)
              </Typing>
            </div>
            <div className="scrolltxt">Scroll Down</div>
            <div className="arrow bounce"></div>
          </div>
          {/* <p className="quote" data-aos="fade-down" data-aos-delay="3000">i would love to change the world, but they won't give me the source code</p> */}
        </div>
      </div>
    );
  }
}

export default Home;
