import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Home from './Components/home';
import Registration from './Components/registration';
import Startup from './Components/startup';
import Login from './Components/login';



function App() {
  return (
    <Router>
      <div className="">
        <div className="App">


          <Route exact path="/" component={Home} />
          <Route path="/startup" component={Startup} />
          <Route path="/registration" component={Registration} />
          <Route path="/login" component={Login} />





        </div>
      </div>
    </Router>
  );
}

export default App;
