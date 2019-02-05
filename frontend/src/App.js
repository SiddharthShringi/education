import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Home from './components/layout/Home'
import Dataset from './components/Dataset'




import './App.css';

class App extends Component {



  render() {
    return(
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/visualization' component={Dataset} />
            {/* <Route path='/signin' component={SignIn} /> */}
            {/* <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
