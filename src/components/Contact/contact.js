import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { Button, Form, FormGroup, Label, Input,  } from 'reactstrap';
import './contact.css';
import Nav from '../Nav/nav.js';




class Contact extends React.Component {


    render() {
        return (
        <div className="contact-page">
          <div className="c-bg"> 
          <Nav/>
         
              <div className="c-text-container ">
                <h1 className="c-text">Contact Me</h1>
                <h4 className="c-text2">
        
                    <Form action="https://formspree.io/saashacodes@gmail.com" method="POST" id="contactform">
                        <FormGroup>
                            <Label>Name:</Label>
                            <Input className="hvr-pulse-grow" type="text" name="name" placeholder="name" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Email:</Label>
                            <Input className="hvr-pulse-grow" type="email" name="replyto" placeholder="email" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Message:</Label>
                            <Input className="hvr-pulse-grow" type="text" name="message" placeholder="message"/>
                        </FormGroup>
                        <Button className="Button" type="submit">Submit</Button>
                    </Form>
            
                <div className="Message">Or, just email me directly at <strong>saasha.pina@gmail.com</strong>.</div>
                </h4>
                <div className="icons">
                        <SocialIcon className="item hvr-pulse-grow" url="https://github.com/saashapina" color="white" />
                        <SocialIcon className="item hvr-pulse-grow" url="https://twitter.com/saashapina" color="white" />
                        <SocialIcon className="item hvr-pulse-grow" url="https://linkedin.com/in/saashapina" color="white" />
                        <SocialIcon className="item hvr-pulse-grow" url="https://codepen.io/saashapina/" color="white" />
                
                </div>
                <div className="footer"> Copyright © 2018 SaaSha Pina ❤️</div>
              </div>
              
          </div>    
        </div>
        )
    }

}

export default Contact;