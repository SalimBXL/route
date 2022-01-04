import React from "react";
import "./FrameBox.css";

const Message = ({children}) => {
    return (
        <div className="FrameBox">
            {children}
        </div>
    );
}

export default Message;