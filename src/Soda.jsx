import React from "react";
import FrameBox from "./FrameBox";
import { Link } from "react-router-dom";
import "./Soda.css";

const Soda = ({name}) => {
    return (
        <div className="Soda">
            <FrameBox>
                <h1>Soda</h1>
            </FrameBox>
            <p><Link to="/">Back</Link></p>
        </div>
    );
}

export default Soda;