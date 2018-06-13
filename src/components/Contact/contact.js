import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { Button, Form, FormGroup, Label, Input,  } from 'reactstrap';
import './contact.css';
import Nav from '../Nav/nav.js';




class Contact extends React.Component {


    render() {
        return (
        <body className="contact-page">
          <div className="c-bg"> 
          <Nav/>
         
              <div className="c-text-container hvr-shutter-out-horizontal">
                <h1 className="c-text">Contact Me</h1>
                <h4 className="c-text2">
        
                    <Form action="https://formspree.io/saashacodes@gmail.com" method="POST" id="contactform">
                        <FormGroup>
                            <Label>Name:</Label>
                            <Input type="text" name="name" placeholder="name" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Email:</Label>
                            <Input type="email" name="replyto" placeholder="email" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Message:</Label>
                            <Input type="text" name="message" placeholder="message"/>
                        </FormGroup>
                        <Button type="submit">Submit</Button>
                    </Form>
            
                <div className="Message">Or, just email me directly at <strong>saashacodes@gmail.com</strong>.</div>
                </h4>
                <div className="icons">
                        <SocialIcon className="item" url="https://github.com/saashapina" color="white" />
                        <SocialIcon className="item" url="https://twitter.com/saashapina" color="white" />
                        <SocialIcon className="item" url="https://linkedin.com/in/saashapina" color="white" />
                        <SocialIcon className="item" url="https://codepen.io/saashapina/" color="white" />
                
                </div>
                <div className="footer"> Copyright © 2018 <a href="https://github.com/saashapina" target="_blank" rel="noopener noreferrer" >SaaSha Pina</a> ❤️</div>
              </div>
              
          </div>    
        </body>
        )
    }

}

export default Contact;