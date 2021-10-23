import React from "react";
import Testpage1 from "./pages/testpage1";
import Testpage2 from  "./pages/testpage2";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

function App() {

  var index = () => {
    return(
      <div>
        <h1>Hello</h1>
      </div>
    );
  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/testpage/1">First Product</Link>
            </li>
            <li>
              <Link to="/testpage/2">Second Product</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={index} />
        <Route path="/testpage/1" exact component={Testpage1} />
        <Route path="/testpage/2" exact component={Testpage2} />
      </div>
    </Router>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
