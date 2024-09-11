import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './content-big-screen.css';
import xIcon from './icons/X.png';

function ContentBigScreen({ tab_name, children }) {
    const navigate = useNavigate(); 

    // Use ref to target the scrollable content div
    const scrollableRef = useRef(null);

    const handleExitClick = () => {
        navigate('/');
    };

    const handleScrollToTop = () => {
        if (scrollableRef.current) {
            scrollableRef.current.scrollTo({
                top: 0,
                behavior: 'smooth', // Smooth scrolling effect
            });
        }
    };

    // Check if the spacers should be hidden
    const hideSpacers = tab_name === '/contact/' || tab_name === '/expertise/';

    return (
        <div className="big-screen">
            <div className="topbar">
                <div>{tab_name}</div>
                <img src={xIcon} id="exit" alt="x-icon" onClick={handleExitClick} />
            </div>
            <div className="scrollable-content" ref={scrollableRef}>
                {children}

                {!hideSpacers && (
                    <button onClick={handleScrollToTop}>
                        Back to Top
                    </button>
                )}
            </div>
            <div className="botbar">
                <div>v1.00</div>
            </div>
        </div>
    );
}

export default ContentBigScreen;
