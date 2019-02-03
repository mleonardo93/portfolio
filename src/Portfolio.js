import React, { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
  render() {
    return(
      <div className="portfolio-background">
        <h1 className="title-text">Portfolio</h1>
        <ul className="projects">
          <li>
            <a href="https://github.com/mleonardo93/gentle-reminders"><h2>Gentle Reminders</h2></a>
            <p>
              Encouraging reminders so you actually get your tasks done! It's built with React and Rails. 
              I already had Rails knowledge when starting this project, but I was new to React and learned a 
              lot. I really like React - it's really fast, and the modularity is also good for performance. I 
              look forward to getting more opportunities to use it.
            </p>
          </li>

          <li>
            <a href="https://github.com/mleonardo93/qwiki"><h2>Qwiki</h2></a>
            <p>
              Editable and Markdown-responsive pages with collaborators in Rails; features Stripe integration 
              for upgrading user accounts to Premium status for private pages. Building the controller and model 
              for collaborators was definitely the hardest part of this project, but I learned a lot doing it.
            </p>
          </li>

          <li>
            <a href="https://github.com/mleonardo93/bloccit"><h2>Bloccit</h2></a>
            <p>
              A Reddit clone in Rails. I built this with test-driven development and it taught me a lot about 
              the process of red-green testing. This was also my introduction to Rails where I learned the 
              power of the framework. While it's old, it's very robust and has a great library of gems to 
              extend it. I'm a fan of how semantic Ruby code is - it looks very eloquent in practice.
            </p>
          </li>

          <li>
            <a href="https://github.com/mleonardo93/bloc-chat"><h2>Bloc Chat</h2></a>
            <p>
              An AngularJS chat room app that integrates with a Firebase backend. This was the first time I 
              built something that interfaced with an external API but it came pretty easily to me. If I did 
              this project again today, I would definitely use a different stack and broaden my knowledge
              some.              
            </p>
          </li>
        </ul>
      </div>
    )
  }
}

export default Portfolio;