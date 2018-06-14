import React from 'react'
import './skills.css';
import { Table } from 'reactstrap';

class Skills extends React.Component {

    render() {
        return (
        <div className="skills-page">
          <div className="s-bg"> 
             
              <div className="s-text-container">
                <h1 className="s-text" data-aos="fade-down">Skills</h1>
               
                  <Table hover className="datas" data-aos="flip-up"> 
                    <thead>
                      <tr className="head">
                        <th>HTML</th>
                        <th>CSS</th>
                        <th>Javascript</th>
                        <th>Back-End</th>
                        <th>Others</th>
                      </tr>
                    </thead>
                    <tbody className="tbody">
                      <tr>
                        <td>HTML5</td>
                        <td>CSS3</td>
                        <td>ReactJS</td>
                        <td>MongoDB</td>
                        <td>Github</td>
                      </tr>
                      <tr>
                        <td>JSX</td>
                        <td>SCSS</td>
                        <td>Redux</td>
                        <td>RESTful/ CRUD APIs</td>
                        <td>Visual Studios</td>
                      </tr>
                      <tr>
                          <td>PUG</td>
                          <td>LESS</td>
                          <td>Javascript(ES6)</td> 
                          <td>Firebase</td>
                          <td>Blender</td>
                      </tr>
                      <tr>
                          <td></td>
                          <td>Bootstrap</td>
                          <td>NodeJS</td>
                          <td>Express</td>
                          <td>Responsive Sites</td>
                      </tr>
                      <tr>
                          <td></td>
                          <td>Reactstrap</td>
                          <td>JQuery</td>
                          <td>mLab</td>
                          <td>Agile Working Enviornment</td>
                      </tr>
                      <tr>
                          <td></td>
                          <td>SASS</td>
                          <td>Mocha/Chai testing</td>
                          <td>Heroku</td>
                          <td>Media Queries</td>
                      </tr>
                    </tbody>
                  </Table>
                
              </div>
                <p className="s-quote" data-aos="fade-down">i would love to change the world, but they won't give me the source code</p>
          </div>    
        </div>
        )
    }

}

export default Skills;