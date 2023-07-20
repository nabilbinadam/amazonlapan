import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import Login from "./Login";
import Layout from "./Layout";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
            <Route path="/" element={<> <Header/><Home/> </>} />
            <Route path="Checkout" element={<> <Header/><Checkout/> </>} />
            <Route path="Login" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
