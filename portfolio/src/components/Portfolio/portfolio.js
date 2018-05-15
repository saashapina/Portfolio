import React from 'react'
import './portfolio.css';
import Starwars from './portfolio3.PNG'
import { Card, Button, CardHeader, CardBody, CardText, Row, Col } from 'reactstrap'

class Portfolio extends React.Component {

    render() {
        return (
        <body className="portfolio-page">
          <div className="p-bg"> 
         
              <div className="p-text-container">
                <h1 className="p-text">Portfolio</h1>
                <div className="cards">
                  <Row> 
                    <Col sm="4">
                      <Card className="Card Card1">
                        <CardHeader tag="h3"> My React Portfolio</CardHeader>
                          <CardBody>
                            <img className="image" width="100%" src="https://image.ibb.co/dZ6rkd/portfolio.png" alt="Portfolio Card Image"/>
                            <CardText className="text">Created my first React Portfolio, made entirely with ReactJS and reactstrap. Completely Responsive, and easily navigated.</CardText>
                          </CardBody>
                          <Button className="Button">Check It Out!</Button>
                      </Card>
                    </Col>
                    <Col sm="4">
                      <Card className="Card Card2"> 
                        <CardHeader tag="h3"> Pure CSS Image </CardHeader>
                        <CardBody>
                          <img className="image" width="100%" src="https://image.ibb.co/kZT45d/portfolio2.png" alt="Mario Card Image"/>
                          <CardText className="text"> Created a Pure CSS animated Mario on a Nintendo Switch. Almost 700 lines of Pure CSS.</CardText>
                        </CardBody>
                        <Button className="Button">Check It Out! </Button>
                      </Card>
                    </Col>
                    <Col sm="4">
                      <Card className="Card Card3">
                        <CardHeader tag="h3"> Responsive Reactstrap Cards </CardHeader>
                        <CardBody>
                          <img className="image" width="100%" src={ Starwars } alt="Responsive Cards"/>
                          <CardText className="text"> Created Responsive Reactstrap Cards for Starwars characters taken from SWAPI The Star Wars API</CardText>
                        </CardBody>
                        <Button className= "Button"> Check It Out!</Button>
                      </Card>
                    </Col>
                  </Row>
                </div>
            </div>
              
               
          </div>    
        </body>
        )
    }

}

export default Portfolio;