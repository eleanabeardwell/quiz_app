import './App.css';
import React from 'react';
import { Route } from 'react-router';
import Home from './pages/Home.jsx';
import Quiz from "./pages/questions/Quiz";
import { useHistory , BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router history={useHistory()}>
        <Route path="/Home" component={Home}/>
        <Route path="/Quiz" component={Quiz}/>
      </Router>
    </div>
  );
}

export default App;
