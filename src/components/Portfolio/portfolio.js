import React from 'react'
import './portfolio.css';
import Starwars from './portfolio3.PNG'
import { Card, Button, CardHeader, CardBody, CardText, Row, Col } from 'reactstrap'


const colorblack = {
  color: 'black'
}

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
                      <Card className="Card Card1 fadingin hvr-float-shadow"  data-aos="fade-down" data-aos-delay="300">
                      <a href="https://saashapina.github.io/VinylWaif/" target="_blank" style={{textDecoration:"none"}}> 
                        <CardHeader tag="h3" style={colorblack}>VinylWaif Film Site</CardHeader>
                          <CardBody>
                            <img className="image" width="100%" src="https://preview.ibb.co/fmZBHe/Vinyl_Waif_Pic.png" alt="VinylWaif"/>
                            <CardText className="p-text">Fully responsive fashion film portfolio page for a film artist. Created with JavaScript, HTML, CSS and ReactJS.</CardText>
                          </CardBody>
                        </a>  
                        <a className="button" href="https://github.com/saashapina/VinylWaif" target="_blank">Github Repo</a>
                      </Card>
                    </Col>
                    <Col sm="4" className="mycard2">
                      <Card className="Card Card1 fadingin hvr-float-shadow"  data-aos="fade-down" data-aos-delay="600">
                      <a href="https://www.youtube.com/watch?v=iRNm42evvT0" target="_blank" style={{textDecoration:"none"}}> 
                        <CardHeader tag="h3" style={colorblack}>Lambda Hair School</CardHeader>
                          <CardBody>
                            <img className="image" width="100%" src="https://preview.ibb.co/f6Ycap/Capstone_Slide1.png" alt="Tweet Collage"/>
                            <CardText className="p-text">A full-stack web application used to schedule appointments and leave feedback for student hair stylists</CardText>
                          </CardBody>
                        </a>
                        <a className="button" href="https://github.com/Lambda-School-Labs/CS8-hairschool" target="_blank">Github Repo</a>  
                      </Card>
                    </Col>
                    <Col sm="4" className="mycard3">
                      <Card className="Card Card3 fadingin hvr-float-shadow"  data-aos="fade-down" data-aos-delay="900" >
                      <a href="https://www.youtube.com/watch?v=RlbHlq58GYA" target="_blank" style={{textDecoration:"none"}}>
                        <CardHeader tag="h3" style={colorblack}> Tweet Collage 🏆 </CardHeader>
                        <CardBody>
                          <img className="image" width="100%" src="https://preview.ibb.co/nfHaT9/slide0.png" alt="Responsive Cards"/>
                          <CardText className="p-text"> Award Winning Lambda School Hackathon Project Created in 24 hours - TweetCollage, A Web application that turns your tweets into shareable art that represents who you are and what you tweet about.</CardText>
                        </CardBody>
                       </a>
                       <a className="button" href="https://github.com/saashapina/TweetCollage" target="_blank">Github Repo</a> 
                      </Card>
                    </Col>
                    </Row>

                    <Row className="bottomImageRow">
                    <Col sm="4" className="mycard4">
                      <Card className="Card Card2 hvr-float-shadow"  data-aos="fade-down" data-aos-delay="300" > 
                      <a href="https://codepen.io/saashapina/full/wjWVvb/" target="_blank" style={{textDecoration:"none"}}>
                        <CardHeader tag="h3" style={colorblack}> Animated Pure CSS Image </CardHeader>
                        <CardBody>
                          <img className="image" width="100%" src="https://image.ibb.co/kZT45d/portfolio2.png" alt="Mario Card Image"/>
                          <CardText className="p-text"> Created a Pure CSS animated Mario on a Nintendo Switch. Almost 700 lines of Pure CSS.</CardText>
                        </CardBody>
                       </a>
                      </Card>
                    </Col>
                    <Col sm="4" className="mycard5">
                      <Card className="Card Card2 hvr-float-shadow" data-aos="fade-down" data-aos-delay="600"> 
                      <a href="https://peopleofcolorintech.com/interview/saasha-pina-software-engineer/" target="_blank" style={{textDecoration:"none"}}>
                        <CardHeader tag="h3" style={colorblack}> Community Contribution: POCIT Article </CardHeader>
                        <CardBody>
                          <img className="image" width="100%" src="https://preview.ibb.co/f1eo39/pocit1.png" alt="POCIT Image"/>
                          <CardText className="p-text"> Featured interview on peopleofcolorintech.com about my story and the importance of diversity in tech</CardText>
                        </CardBody>
                       </a>
                      </Card>
                    </Col>
                    <Col sm="4" className="mycard6">
                      <Card className="Card Card2 hvr-float-shadow"  data-aos="fade-down" data-aos-delay="900" > 
                      <a href="https://github.com/saashapina/TweetCollage-TwitterBot" target="_blank" style={{textDecoration:"none"}}>
                        <CardHeader tag="h3" style={colorblack}> Twitter Bot </CardHeader>
                        <CardBody>
                          <img className="image" width="100%" src="https://preview.ibb.co/n4NRiK/twitterbot1.png"  alt="POCIT Image"/>
                          <CardText className="p-text"> Created a Twitter Bot that replies to mentions, posts images, and responds to follows</CardText>
                        </CardBody>
                      </a>
                      <a className="button" href="https://github.com/saashapina/TweetCollage-TwitterBot" target="_blank">Github Repo</a>
                      </Card>
                    </Col>
                  </Row>
                  
                </div>
            </div>
              
               
          </div>    
        </div>
        )
    }

}

export default Portfolio;