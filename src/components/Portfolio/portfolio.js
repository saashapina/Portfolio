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
                <div className="cards fadingin">
                  <Row> 
                    <Col sm="4" className="mycard1">
                      <Card className="Card Card1 hvr-float-shadow"  data-aos="fade-down" data-aos-delay="300">
                      <a href="https://saashacodes.com" style={{textDecoration:"none"}}> 
                        <CardHeader tag="h3" style={colorblack}> My React Portfolio</CardHeader>
                          <CardBody>
                            <img className="image" width="100%" src="https://image.ibb.co/dZ6rkd/portfolio.png" alt="Portfolio Card Image"/>
                            <CardText className="p-text">Created my first React Portfolio, made entirely with ReactJS and reactstrap. Completely Responsive, and easily navigated.</CardText>
                          </CardBody>
                          </a>  
                      </Card>
                    </Col>
                    <Col sm="4" className="mycard2">
                      <Card className="Card Card2 hvr-float-shadow"  data-aos="fade-down" data-aos-delay="600"> 
                      <a href="https://codepen.io/saashapina/full/wjWVvb/" style={{textDecoration:"none"}}>
                        <CardHeader tag="h3" style={colorblack}> Pure CSS Image </CardHeader>
                        <CardBody>
                          <img className="image" width="100%" src="https://image.ibb.co/kZT45d/portfolio2.png" alt="Mario Card Image"/>
                          <CardText className="p-text"> Created a Pure CSS animated Mario on a Nintendo Switch. Almost 700 lines of Pure CSS.</CardText>
                        </CardBody>
                       </a>
                      </Card>
                    </Col>
                    <Col sm="4" className="mycard3">
                      <Card className="Card Card3 hvr-float-shadow"  data-aos="fade-down" data-aos-delay="900">
                        <CardHeader tag="h3"> Responsive Reactstrap Cards </CardHeader>
                        <CardBody>
                          <img className="image" width="100%" src={ Starwars } alt="Responsive Cards"/>
                          <CardText className="p-text"> Created Responsive Reactstrap Cards for Starwars characters taken from SWAPI The Star Wars API</CardText>
                        </CardBody>
                       
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