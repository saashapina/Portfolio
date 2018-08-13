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
                    <Col sm="6" className="mycard1">
                      <Card className="Card Card1 fadingin hvr-float-shadow"  /*data-aos="fade-down" data-aos-delay="300"*/>
                      <a href="https://www.youtube.com/watch?v=iRNm42evvT0" style={{textDecoration:"none"}}> 
                        <CardHeader tag="h3" style={colorblack}>Lambda Hair School</CardHeader>
                          <CardBody>
                            <img className="image" width="100%" src="https://preview.ibb.co/f6Ycap/Capstone_Slide1.png" alt="Tweet Collage"/>
                            <CardText className="p-text">A full-stack web application used to schedule appointments and leave feedback for your favorite student stylists!</CardText>
                          </CardBody>
                          </a>  
                      </Card>
                    </Col>
                    <Col sm="6" className="mycard2">
                      <Card className="Card Card3 fadingin hvr-float-shadow"  /*data-aos="fade-down" data-aos-delay="900" */>
                      <a href="https://www.youtube.com/watch?v=RlbHlq58GYA" style={{textDecoration:"none"}}>
                        <CardHeader tag="h3" style={colorblack}> Tweet Collage 🏆 </CardHeader>
                        <CardBody>
                          <img className="image" width="100%" src="https://preview.ibb.co/nfHaT9/slide0.png" alt="Responsive Cards"/>
                          <CardText className="p-text"> Award Winning Lambda School Hackathon Project Created in 36 hours - TweetCollage, A Web application that turns your tweets into shareable art that represents who you are and what you tweet about.</CardText>
                        </CardBody>
                       </a>
                      </Card>
                    </Col>
                    </Row>
                    <Row className="bottomImageRow">
                    <Col sm="6" className="mycard3">
                      <Card className="Card Card2 hvr-float-shadow"  /*data-aos="fade-down" data-aos-delay="600" */> 
                      <a href="https://codepen.io/saashapina/full/wjWVvb/" style={{textDecoration:"none"}}>
                        <CardHeader tag="h3" style={colorblack}> Pure CSS Image </CardHeader>
                        <CardBody>
                          <img className="image" width="100%" src="https://image.ibb.co/kZT45d/portfolio2.png" alt="Mario Card Image"/>
                          <CardText className="p-text"> Created a Pure CSS animated Mario on a Nintendo Switch. Almost 700 lines of Pure CSS.</CardText>
                        </CardBody>
                       </a>
                      </Card>
                    </Col>
                    <Col sm="6" className="mycard4">
                      <Card className="Card Card2 hvr-float-shadow" /* data-aos="fade-down" data-aos-delay="600" */> 
                      <a href="https://peopleofcolorintech.com/interview/saasha-pina-software-engineer/" style={{textDecoration:"none"}}>
                        <CardHeader tag="h3" style={colorblack}> Community Contribution: POCIT Article </CardHeader>
                        <CardBody>
                          <img className="image" width="100%" src="https://preview.ibb.co/f1eo39/pocit1.png" alt="POCIT Image"/>
                          <CardText className="p-text"> Featured interview on peopleofcolorintech.com about my story and the importance of diversity in tech</CardText>
                        </CardBody>
                       </a>
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