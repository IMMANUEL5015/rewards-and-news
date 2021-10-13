import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Landing from './pages/landing/Landing';
import About from './pages/about/About';
import Reward from './pages/reward/Reward';
import News from './pages/news/News';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/about" exact component={About}/>
        <Route path="/reward" exact component={Reward}/>
        <Route path="/news" exact component={News}/>
      </Switch>
    </div>
  );
}

export default App;
