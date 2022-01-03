import React from "react";
import { Link } from "react-router-dom";
import machine from "./machine.gif";
import "./Home.css";


const Home = () => {
    return (
        <div className="container">

            <div className="frame">
                Blabla
            </div>

            <div>
                <img src={machine} alt="Vending Machine" />
            </div>

            <div className="frame">
                <div className="menu">
                    <p><Link to="/">Home</Link></p>
                    <p><Link to="/soda">Soda</Link></p>
                    <p><Link to="/chips">Chips</Link></p>
                </div>
            </div>
            
        </div>
    );
}

export default Home;