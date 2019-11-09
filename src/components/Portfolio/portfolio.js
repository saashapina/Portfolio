import React from "react";
import "./portfolio.css";
import BTKD from "./btkd.png";
import { Card, CardHeader, CardBody, CardText, Row, Col } from "reactstrap";

const colorblack = {
  color: "black"
};

class Portfolio extends React.Component {
  render() {
    return (
      <div className="portfolio-page">
        <div className="p-bg">
          <div className="p-text-container">
            <h1 className="p-text size">Portfolio</h1>
            <div className="cards">
              <Row>
                <Col sm="4" className="mycard1">
                  <Card
                    className="Card Card1 fadingin hvr-float-shadow"
                    data-aos="fade-down"
                    data-aos-delay="300"
                  >
                    <a
                      href="http://www.bostontaekwondoacademy.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <CardHeader tag="h3" style={colorblack}>
                        Boston Tae Kwon Do <br /> Web App
                      </CardHeader>
                      <CardBody>
                        <img
                          className="image"
                          width="100%"
                          src={BTKD}
                          alt="BTKD"
                        />
                        <CardText className="p-text">
                          Designed and built web app for local martial arts
                          school from scratch. <br /> <br /> <b>Tools:</b> HTML,
                          CSS, JavaScript, ReactJS, and Gatsby.js
                        </CardText>
                      </CardBody>
                    </a>
                    <a
                      className="button"
                      href="https://github.com/saashapina/btkd"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github Repo
                    </a>
                  </Card>
                </Col>
                <Col sm="4" className="mycard2">
                  <Card
                    className="Card Card1 fadingin hvr-float-shadow"
                    data-aos="fade-down"
                    data-aos-delay="600"
                  >
                    <a
                      href="https://www.youtube.com/watch?v=iRNm42evvT0"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <CardHeader tag="h3" style={colorblack}>
                        Lambda Hair School <br /> Web App
                      </CardHeader>
                      <CardBody>
                        <img
                          className="image"
                          width="100%"
                          src="https://preview.ibb.co/f6Ycap/Capstone_Slide1.png"
                          alt="Tweet Collage"
                        />
                        <CardText className="p-text">
                          Worked on a team to build a full-stack web application
                          used to schedule appointments and leave feedback for
                          student hair stylists <br /> <br />
                          <b>Tools:</b> JavaScript, ReactJS, Python, Django,
                          Bootstrap, Netlify, Heroku, Stripe API, SQLite, Axios
                        </CardText>
                      </CardBody>
                    </a>
                    <a
                      className="button"
                      href="https://github.com/Lambda-School-Labs/CS8-hairschool"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github Repo
                    </a>
                  </Card>
                </Col>
                <Col sm="4" className="mycard3">
                  <Card
                    className="Card Card3 fadingin hvr-float-shadow"
                    data-aos="fade-down"
                    data-aos-delay="900"
                  >
                    <a
                      href="https://www.youtube.com/watch?v=RlbHlq58GYA"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <CardHeader tag="h3" style={colorblack}>
                        Tweet Collage 🏆 <br /> Web App
                      </CardHeader>
                      <CardBody>
                        <img
                          className="image"
                          width="100%"
                          src="https://preview.ibb.co/nfHaT9/slide0.png"
                          alt="Responsive Cards"
                        />
                        <CardText className="p-text">
                          Award Winning Lambda School Hackathon Project Created
                          in 24 hours - TweetCollage, A Web application that
                          turns your tweets into shareable art that represents
                          who you are and what you tweet about. <br />
                          <br /> <b>Tools:</b> ReactJS, MongoDB, IBM Watson
                          Natural Language API, Bing API, Twitter API
                        </CardText>
                      </CardBody>
                    </a>
                    <a
                      className="button"
                      href="https://github.com/saashapina/TweetCollage"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github Repo
                    </a>
                  </Card>
                </Col>
              </Row>

              <Row className="bottomImageRow">
                <Col sm="4" className="mycard4">
                  <Card
                    className="Card Card2 hvr-float-shadow"
                    data-aos="fade-down"
                    data-aos-delay="300"
                  >
                    <a
                      href="https://codepen.io/saashapina/full/wjWVvb/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <CardHeader tag="h3" style={colorblack}>
                        {" "}
                        Animated Pure CSS Image{" "}
                      </CardHeader>
                      <CardBody>
                        <img
                          className="image"
                          width="100%"
                          src="https://image.ibb.co/kZT45d/portfolio2.png"
                          alt="Mario Card"
                        />
                        <CardText className="p-text">
                          {" "}
                          Created a Pure CSS animated Mario on a Nintendo
                          Switch. Almost 700 lines of Pure CSS.
                        </CardText>
                      </CardBody>
                    </a>
                  </Card>
                </Col>
                <Col sm="4" className="mycard5">
                  <Card
                    className="Card Card2 hvr-float-shadow"
                    data-aos="fade-down"
                    data-aos-delay="600"
                  >
                    <a
                      href="https://peopleofcolorintech.com/interview/saasha-pina-software-engineer/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <CardHeader tag="h3" style={colorblack}>
                        Community Contribution: POCIT Article
                      </CardHeader>
                      <CardBody>
                        <img
                          className="image"
                          width="100%"
                          src="https://preview.ibb.co/f1eo39/pocit1.png"
                          alt="POCIT"
                        />
                        <CardText className="p-text">
                          Featured interview on <br /> peopleofcolorintech.com
                        </CardText>
                      </CardBody>
                    </a>
                  </Card>
                </Col>
                <Col sm="4" className="mycard6">
                  <Card
                    className="Card Card2 hvr-float-shadow"
                    data-aos="fade-down"
                    data-aos-delay="900"
                  >
                    <a
                      href="https://github.com/saashapina/TweetCollage-TwitterBot"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <CardHeader tag="h3" style={colorblack}>
                        {" "}
                        Twitter Bot{" "}
                      </CardHeader>
                      <CardBody>
                        <img
                          className="image"
                          width="100%"
                          src="https://preview.ibb.co/n4NRiK/twitterbot1.png"
                          alt="Twitter"
                        />
                        <CardText className="p-text">
                          Created a Twitter Bot that replies to mentions, posts
                          images, and responds to follows <br /> <br />{" "}
                          <b>Tools:</b> NodeJS
                        </CardText>
                      </CardBody>
                    </a>
                    <a
                      className="button"
                      href="https://github.com/saashapina/TweetCollage-TwitterBot"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github Repo
                    </a>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
