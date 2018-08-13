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
                        <th>JavaScript</th>
                        <th>Back-End</th>
                        <th>Others</th>
                      </tr>
                    </thead>
                    <tbody className="tbody">
                      <tr>
                        <td>HTML5</td>
                        <td>CSS3</td>
                        <td>JavaScript(ES6)</td>
                        <td>Python/Django</td>
                        <td>Github</td>
                      </tr>
                      <tr>
                        <td>JSX</td>
                        <td>Sass/SCSS</td>
                        <td>React</td>
                        <td>SQLite3</td>
                        <td>Visual Studio</td>
                      </tr>
                      <tr>
                          <td>PUG</td>
                          <td>LESS</td>
                          <td>Redux</td> 
                          <td>NodeJS/Express</td>
                          <td>Blender</td>
                      </tr>
                      <tr>
                          <td></td>
                          <td>Bootstrap</td>
                          <td>JQuery</td>
                          <td>MongoDB</td>
                          <td>Kanban/Trello Boards</td>
                      </tr>
                      <tr>
                          <td></td>
                          <td>Media Queries/Resposive Sites</td>
                          <td>BabylonJS</td>
                          <td>MongoDB/mLab</td>
                          <td>Agile Working Enviornment</td>
                      </tr>
                      <tr>
                          <td></td>
                          <td></td>
                          <td>Mocha/ChaiJS testing</td>
                          <td>Heroku/Netlify/Firebase</td>
                          <td>Team Collaboration</td>
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