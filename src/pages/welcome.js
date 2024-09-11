import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import worldMap from "../ascii art/map";
import '../css/welcome.css';

function Welcome() {
    const navigate = useNavigate();
    const [animationComplete, setAnimationComplete] = useState(false);

    const handleEnterClick = () => {
        navigate('/home');
    };

    useEffect(() => {
        const canvas = document.querySelector('canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        const fontSize = 10;
        const columns = canvas.width / fontSize;
        const drops = Array.from({ length: columns }).map(() => 1);

        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, .05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            drops.forEach((drop, i) => {
                const text = letters[Math.floor(Math.random() * letters.length)];
                ctx.fillStyle = '#3BFF31'; 
                ctx.font = fontSize + 'px Arial';
                ctx.fillText(text, i * fontSize, drop * fontSize);

                drops[i]++;

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
                    drops[i] = 0;
                }
            });
        }

        const interval = setInterval(draw, 15);

        const timer = setTimeout(() => {
            clearInterval(interval);
            setAnimationComplete(true); // Set animation complete
        }, 2500); 

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className={`welcome-container ${animationComplete ? 'animation-complete' : ''}`}>
            <canvas className={`ascii-canvas ${animationComplete ? 'canvas-hidden' : ''}`}></canvas>

            <pre className={`ascii-art-welcome ${animationComplete ? 'visible' : ''}`}>{worldMap}</pre>

            <h1 id="typewriter" className={animationComplete ? 'visible' : ''}>Welcome to my Portfolio</h1>

            <h1 className={`enter ${animationComplete ? 'visible' : ''}`} onClick={handleEnterClick}>&lt;enter/&gt;</h1>

            <h2 className={`${animationComplete ? 'visible' : ''}`}>Xavier Pimentel</h2>
            <h3 className={`${animationComplete ? 'visible' : ''}`}>A Software Developer</h3>
        </div>
    );
}

export default Welcome;
