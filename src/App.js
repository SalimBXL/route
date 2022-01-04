import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import NotFound from "./NotFound";
import Home from "./Home";
import Soda from "./Soda";
import Chips from "./Chips";
import Food from "./Food";
import './App.css';


const NavBar = () => {

  
  const linkColor = ({isActive}) => isActive ? "active-link" : "nonActive-link";

  return (
    <nav className="App-nav">
      <NavLink className={linkColor} to="/">Home</NavLink>
      <NavLink className={linkColor} to="/soda">Soda</NavLink>
      <NavLink className={linkColor} to="/chips">Chips</NavLink>
    </nav>
  );
}

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={ <Home /> } />
    <Route path="/soda" element={ <Soda /> } />
    <Route path="/chips" element={ <Chips /> } />
    <Route path="/food/:foodName/drink/:drinkName" element={ <Food /> } />
    <Route path="*" element={ <NotFound /> } />
  </Routes>
);

function App() {
  return (
    <div className="App">
      <NavBar />
      <AppRoutes />
    </div>
  );
}

export default App;
