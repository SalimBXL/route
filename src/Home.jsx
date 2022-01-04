import React from "react";
import { Link } from "react-router-dom";
import machine from "./machine.gif";
import FrameBox from "./FrameBox";
import "./Home.css";


const Home = () => {
    return (
        <div className="container">

            <FrameBox>
                <h2>Hello, I am a Vending Machine.</h2>
                <p>What would you liek to eat ?</p>
            </FrameBox>

            <div>
                <img src={machine} alt="Vending Machine" />
            </div>

            <FrameBox>
                <div className="menu">
                    <p><Link to="/">Home</Link></p>
                    <p><Link to="/soda">Soda</Link></p>
                    <p><Link to="/chips">Chips</Link></p>
                </div>
            </FrameBox>
            
        </div>
    );
}

export default Home;