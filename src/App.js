import React, {Component} from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Landing from './components/Landing';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="app">
          <Header />
          <main>

            <Routes>
              <Route exact path="/" component={Landing} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/resume" component={Resume} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
