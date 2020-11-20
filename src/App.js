import './App.css';
import React from 'react';
import { Route } from 'react-router';
import Home from './pages/Home.jsx';
import { useHistory , BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router history={useHistory()}>
        <Route path="/Home" component={Home}/>
      </Router>
    </div>
  );
}

export default App;
