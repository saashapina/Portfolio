import React, { Component } from "react";

import { toElement as scrollToElement } from "./scroll.js";

import "./nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      isSticky: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.pageYOffset > this.nav.offsetTop) {
      this.setState({
        isSticky: true
      });
    } else {
      this.setState({
        isSticky: false
      });
    }
  }

  scrollToPage(pageSelector) {
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    const stickyClass = this.state.isSticky ? "sticky" : "";
    return (
      <div className="navbox">
        {/* <div className="menu">Menu</div> */}
        <div
          className={stickyClass}
          ref={elem => {
            this.nav = elem;
          }}
        >
          <div className="nav" data-aos="fade-down" data-aos-delay="3000">
            <div
              className="nav-item active hvr-grow"
              onClick={e => this.scrollToPage(".home-page")}
            >
              Home
            </div>
            <div
              className="nav-item hvr-grow"
              onClick={e => this.scrollToPage(".about-page")}
            >
              About
            </div>
            <div
              className="nav-item hvr-grow"
              onClick={e => this.scrollToPage(".skills-page")}
            >
              Skills
            </div>
            <div
              className="nav-item hvr-grow"
              onClick={e => this.scrollToPage(".portfolio-page")}
            >
              Portfolio
            </div>
            <div
              className="nav-item hvr-grow"
              onClick={e => this.scrollToPage(".contact-page")}
            >
              Contact
            </div>
            <div className="nav-item hvr-grow">
              <a
                className="resumenav"
                href="https://drive.google.com/file/d/1_kpeDhcUylmxcjt_C41WtcNZSoSauqzx/view?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
