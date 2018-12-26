import React, { Component } from 'react';
import logo from './logo.svg';
import Blog from './containers/Blog';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <section>
            <Blog></Blog>
          </section>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
