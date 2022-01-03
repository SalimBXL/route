import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Soda from "./Soda";
import Chips from "./Chips";
import './App.css';


const NavBar = () => {

  const isActive = (navData) => navData.isActive 
    ? "active-link" 
    : "nonActive-link";

  return (
    <nav className="App-nav">
      <NavLink className={isActive} to="/">Home</NavLink>
      <NavLink className={isActive} to="/soda">Soda</NavLink>
      <NavLink className={isActive} to="/chips">Chips</NavLink>
    </nav>
  );
}

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={ <Home /> } />
    <Route path="/soda" element={ <Soda /> } />
    <Route path="/chips" element={ <Chips /> } />
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
