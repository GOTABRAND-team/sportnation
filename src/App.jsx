import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import navigation from './components/navigation';
import home from './components/home';
import about from './components/about';
import news from './components/news';
import footer from './components/footer';
import banner from './components/banner';

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <Route component={navigation}></Route>
          <Route exact path="/"component={banner}></Route>
          <Route exact path="/" component={home}></Route>
          
          <Route path="/about" component={about}></Route>
          <Route path="/news" component={news}></Route>
          <Route component={footer}></Route>
        </div>
      </Router>

    );
  }
}



export default App;
