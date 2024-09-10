import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './content-big-screen.css';
import xIcon from './icons/X.png';

function ContentBigScreen({ tab_name, children }) {
    const navigate = useNavigate(); 

    const handleExitClick = () => {
        navigate('/');
    };

    return (
        <div className="big-screen">
            <div className="topbar">
                <div>{tab_name}</div>
                <img src={xIcon} id="exit" alt="x-icon" onClick={handleExitClick} /> {/* Add onClick event */}
            </div>
            <div className="scrollable-content">
                {children}
            <div className='spacers'>*</div>
            </div>
            <div className="botbar">
                <div>v1.00</div>
            </div>
        </div>
    );
}

export default ContentBigScreen;
