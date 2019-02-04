import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return(
      <div className="about-background">
        <h1 className="title-text">About me</h1>
        <p className="body-text">
          Hi! My name is Maia. I'm an eternal student and jack of many trades who dabbles and dives into sundry things. 
          I've worked in nonprofits, the hospitality industry, and tech support, consistently getting high-quality and 
          timely work done. I greatly enjoy being able to create unique and meaningful experiences and I try to carry 
          that philosophy to all of my work. My experiences have taught me not to give up when things get difficult but 
          to keep pushing forward. I love people and it is that love of humanity that drives me in my quest to help create 
          a better world with my talents.  
        </p>
        <h2 className="subheading">My skills include:</h2>
        <ul className="skills-list">
          <li>JavaScript + AngularJS + React</li>
          <li>Ruby on Rails</li>
          <li>SQL</li>
          <li>Git</li>
          <li>Windows, macOS, and Ubuntu</li>
          <li>Adobe Creative Suite</li>
          <li>Graphic and user interface design</li>
          <li>Client relations</li>
          <li>Written and oral communications</li>
        </ul>
        <div className="links">
          <a href="goo.gl/93TUzi"><h2>Resume</h2></a>
          <a href="linkedin.com/in/maia-leonardo"><h2>LinkedIn</h2></a>
          <a href="github.com/mleonardo93"><h2>GitHub</h2></a>
        </div>
      </div>
    )
  }
}

export default About;