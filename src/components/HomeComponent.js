import React, { Component } from 'react';
import jack from '../images/jackcar.jpg';

export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: 'plaeholder',
      ariaExpanded: false
    };
  }

  placeholderFunction = () => {
    return this.state.placeholder;
  };

  menuToggle = () => {
    let { ariaExpanded } = this.state;

    this.setState(prevState => ({
      ariaExpanded: !prevState.ariaExpanded
    }));
  };

  render() {
    let { ariaExpanded } = this.state;
    return (
      <div className="wrapper">
        <div className="top">
          <header className="hero">
            <h1>My Pets FanPage</h1>
            <p>🐱🐱 Welcome!! 🐶🐶</p>
          </header>
          <div className="cta cta1">
            <p className="shiba_fact">dogs</p>
            <p className="shiba_fact">+</p>
            <p className="shiba_fact">cats</p>
          </div>
          <div className="cta cta2">
            <p className="shiba_fact">facts</p>
            <ul>
              <li>caught them with pokeballs</li>
              <li>they clean after themselves, weird</li>
              <li>dogs are male, cats are female</li>
              <li>they ❤️ to 💩 on my 💩💩💩</li>
            </ul>
          </div>
        </div>

        <nav className="menu">
          <button
            aria-expanded={ariaExpanded}
            aria-controls="menu-list"
            onClick={this.menuToggle}>
            {ariaExpanded ? (
              <span className="close">×</span>
            ) : (
              <span className="open">☰</span>
            )}
            Menu
          </button>
          <ul id="menu-list">
            <li>
              <a href="">About My family</a>
            </li>
            <li>
              <a href="">Schedule a play day</a>
            </li>
            <li>
              <a href="">KBQ Events</a>
            </li>
            <li>
              <a href="">Gallary</a>
            </li>
          </ul>
        </nav>

        <section className="features">
          <div className="feature jack">
            <h3>Jack</h3>
          </div>
          <div className="feature rush">
            <h3>Rush</h3>
          </div>
          <div className="feature luna">
            <h3>Luna</h3>
          </div>
          <div className="feature artemis">
            <h3>Artemis</h3>
          </div>
        </section>
      </div>
    );
  }
}
