import React from 'react'
import './portfolio.css';


import { UncontrolledCarousel } from 'reactstrap';



const items = [
    
  {
    src: 'https://image.ibb.co/dZ6rkd/portfolio.png',
    altText: 'Portfolio',
    // caption: 'Portfolio ',
    header: 'My React Portfolio'
  },
  {
    src: 'https://image.ibb.co/kZT45d/portfolio2.png',
    altText: 'Mario',
    // caption: 'Pure CSS',
    header: 'Pure CSS Animated Mario'
  },
  {
    src: 'https://image.ibb.co/fyUKMJ/portfolio3.png',
    altText: 'React',
    // caption: 'React Cards',
    header: 'Responsive React Cards App'
  }
];


class Portfolio extends React.Component {

    render() {
        return (
        <body className="portfolio-page">
          <div className="p-bg"> 
         
              <div className="p-text-container">
                <h1 className="p-text">Portfolio</h1>
                <h4 className="p-text2">
                {/* <UncontrolledCarousel className="sel" items={items}/> */}
                </h4>
            </div>
              
               
          </div>    
        </body>
        )
    }

}

export default Portfolio;