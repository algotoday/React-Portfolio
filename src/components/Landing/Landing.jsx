// Landing.jsx
import React from 'react';

const Landing = () => (
  <div className="landing">
    <h1>svideo</h1>
    <input type="text" placeholder="Search" />
    <a>or Browse All</a>
  </div>
);

export default Landing;
// ClientApp.jsx
import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import Landing from './Landing';

const App = () => (
  <HashRouter>
    <div className="app">
      <Route exact path="/" component={Landing} />
    </div>
  </HashRouter>
);