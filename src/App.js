import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Login from './pages/Login';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import Gameinfo from './components/Gameinfo';


function App() {
  return (
    <div>
    
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
          <Route path='/login' component={Login} />
          <Route path='/gameinfo' component={Gameinfo} />
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;