import React from "react";
import "./about.css";
import propic from "./saashp.png";
import AOS from "aos";

class About extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 2000
    });
  }
  render() {
    return (
      <div className="about-page">
        <div className="ab-bg">
          <div className="ab-text-container">
            <div className="textytext hvr-shutter-out-horizontal">
              <h1 className="ab-text" data-aos="fade-down">
                About Me
              </h1>
              <img
                className="pic"
                src={propic}
                alt="propic"
                data-aos="fade-down"
                data-aos-delay="200"
              />
              <div className="ab-text2" data-aos="fade-up" data-aos-delay="400">
                <p>
                  Hello world, I'm SaaSha. 👋🏽
                  <br />
                  <br />
                  I'm a front end UI/UX engineer based in Boston, MA. Outside of
                  coding, I enjoy hiking high mountains, xtreme martial arts🤸🏽,
                  painting, playing music, and anything that I can freely
                  express myself with.
                  <br />
                  <br />
                  I have a thing for creating beautiful applications and solving
                  problems. I believe craft, imagination, and embracing diverse
                  creativity is what makes the world turn round. I've worked
                  individually, and on many talented teams to create engaging
                  web applications. <br />
                  <br />
                  My Bottom Line:
                  <ul>
                    <li>
                      Create amazing experiences for everyone (that means 100%
                      accessible)
                    </li>
                    <li>
                      Collaboration (more great minds means more creative
                      innovative ideas)
                    </li>
                    <li>Make things work!</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
