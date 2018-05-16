import React from 'react'
import './skills.css';
import { Table } from 'reactstrap';

class Skills extends React.Component {


    render() {
        return (
        <body className="skills-page">
          <div className="s-bg"> 
             
              <div className="s-text-container">
                <h1 className="s-text">Skills</h1>
               
                  <Table hover className="datas"> 
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
                          <td>NodeJS</td>
                          <td>Code Pen</td>
                      </tr>
                      <tr>
                          <td></td>
                          <td>Bootstrap</td>
                          <td>NodeJS</td>
                          <td>Firebase</td>
                          <td>Responsive Sites</td>
                      </tr>
                      <tr>
                          <td></td>
                          <td>Reactstrap</td>
                          <td>Mocha/Chai testing</td>
                          <td>mLab</td>
                          <td>Agile Working Enviornment</td>
                      </tr>
                      <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>Heroku</td>
                          <td>Media Queries</td>
                      </tr>
                    </tbody>
                  </Table>
                
              </div>
                <p className="s-quote">i would love to change the world, but they won't give me the source code</p>
          </div>    
        </body>
        )
    }

}

export default Skills;