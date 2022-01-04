import React from "react";
import FrameBox from "./FrameBox";
import { Link } from "react-router-dom";
import "./Chips.css";

const Chips = () => {
    return (
        <div className="Chips">
            <FrameBox>
                <h1>Chips</h1>
            </FrameBox>
            <p><Link to="/">Back</Link></p>
        </div>
    );
}

export default Chips;