import React from "react";
import "./popup.css";

function Popup({ message, show, onClose }) {
    return (
        show && (
            <div className="popup-container">
                <div className="popup-message">
                    {message}
                </div>
            </div>
        )
    );
}

export default Popup;
