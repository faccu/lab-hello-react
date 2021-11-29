// src/App.js
import './App.css';

import ironhack from './images/ironhack.png';
import menu from './images/menu.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';


function App() {
  return (
    <div className="App">

    <header className="App-header"> 
      <nav>
        <img src={ironhack} alt={ironhack} className="nav-logo"></img>
        <img src={menu} alt={menu} className="nav-logo" id="menu"></img>
      </nav>
    </header>
    <main>
      <section id="intro">

        <div id="text-container">
          <h1 id="title">
            Say hello to ReactJS
          </h1>
          <p id="subtitle">
            You will learn how to use<br/>
            the most popular front end library,<br/>
            and become a Super Ninja developer.
          </p>
          <button>Awesome!</button>
        </div>
      </section>
      <section id="features">

        <div className="feature-card">
          <img src={icon1} alt={icon1} className="icon"></img>
          <div className="info-container">
            <h3 className="card-title">Declarative</h3>
            <p className="card-text">React makes it painless to create interactive UIs</p>
          </div>
        </div>
        <div className="feature-card">
          <img src={icon2} alt={icon2} className="icon"></img>
          <div className="info-container">
            <h3 className="card-title">Components</h3>
            <p className="card-text">Build encapsulated components that manage their state.</p>
          </div>
        </div>
        <div className="feature-card">
          <img src={icon3} alt={icon3} className="icon"></img>
          <div className="info-container">
            <h3 className="card-title">Single-Way</h3>
            <p className="card-text">A set of immutable values are passed to the component's</p>
          </div>
        </div>
        <div className="feature-card">
          <img src={icon4} alt={icon4} className="icon"></img>
          <div className="info-container">
            <h3 className="card-title">JSX</h3>
            <p className="card-text">Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
      </section>
    </main>
    </div>
  )

}

export default App;