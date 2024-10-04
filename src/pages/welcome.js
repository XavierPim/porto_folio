import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  // Import axios for making API requests
import worldMap from "../ascii art/map";
import '../css/welcome.css';

function Welcome() {
    const navigate = useNavigate();
    const [animationComplete, setAnimationComplete] = useState(false);
    const [ip, setIp] = useState(''); // State to hold the user's IP address

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
            setAnimationComplete(true);
        }, 2500); 

        const handleKeyPress = (e) => {
            if (e.key === 'Enter') {
                navigate('/home');
            }
        };

        // Add event listener for the "Enter" key
        window.addEventListener('keydown', handleKeyPress);

        // Fetch user's IP address
        axios.get('https://api.ipify.org?format=json')
            .then(response => {
                setIp(response.data.ip); // Set IP address state
            })
            .catch(error => {
                console.error('Error fetching the IP address:', error);
            });

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [navigate]);

    return (
        <div className={`welcome-container ${animationComplete ? 'animation-complete' : ''}`}>
            <canvas className={`ascii-canvas ${animationComplete ? 'canvas-hidden' : ''}`}></canvas>

            <pre className={`ascii-art-welcome ${animationComplete ? 'visible' : ''}`}>{worldMap}</pre>

            <h1 id="typewriter" className={animationComplete ? 'visible' : ''}>Hello World! Welcome to my portfolio</h1>

            <h1 className={animationComplete ? 'visible' : ''}>
                {ip ? `Access: ${ip}` : 'Fetching IP...'}
            </h1>

            <h1 className={`enter ${animationComplete ? 'visible' : ''}`} onClick={handleEnterClick}>&lt;enter/&gt;</h1>

            <div>
                <h2 className={`${animationComplete ? 'visible' : ''}`}>Xavier Pimentel</h2>
                <h3 className={`${animationComplete ? 'visible' : ''}`}>A Software Developer</h3>
            </div>
        </div>
    );
}

export default Welcome;
