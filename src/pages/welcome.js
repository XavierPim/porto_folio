import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/welcome.css';
import AsciiGlobeView from '../components/ascii-globe-view';

const ROTATING_ROLES = [
    'A Software Developer',
    'A Product Manager',
    'A Web Developer',
    'A Freelance Developer',
];
const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*';
const ROLE_ANIMATION_MS = 1300;
const ROLE_SETTLE_MS = 1600;

function Welcome() {
    const navigate = useNavigate();
    const [animationComplete, setAnimationComplete] = useState(false);
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayRole, setDisplayRole] = useState(ROTATING_ROLES[0]);
    const canvasRef = useRef(null);

    const handleEnterClick = () => {
        navigate('/home');
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return undefined;
        }
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            return undefined;
        }

        const fontSize = 16;
        const letters = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ$#@%&*'.split('');
        let drops = [];

        const initializeRain = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const columns = Math.floor(canvas.width / fontSize);
            drops = Array.from({ length: columns }).map(() => ({
                y: -Math.random() * canvas.height,
                speed: 0.45 + Math.random() * 0.95,
                resetOffset: Math.random() * canvas.height * 0.35,
            }));
        };

        initializeRain();

        function draw() {
            // Fading trails instead of hard clears for a softer rain look.
            ctx.fillStyle = 'rgba(0, 0, 0, 0.12)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = 'rgba(64, 174, 59, 0.78)';
            ctx.font = `${fontSize}px VT323, monospace`;

            drops.forEach((dropState, i) => {
                // Keep streams sparse so it feels like rain, not a wall of text.
                if (Math.random() < 0.28) {
                    const text = letters[Math.floor(Math.random() * letters.length)];
                    const x = i * fontSize;
                    ctx.fillText(text, x, dropState.y);
                }

                dropState.y += dropState.speed * fontSize;

                if (dropState.y > canvas.height + dropState.resetOffset) {
                    dropState.y = -Math.random() * canvas.height * 0.5;
                    dropState.speed = 0.45 + Math.random() * 0.95;
                }
            });
        }

        const interval = setInterval(draw, 34);

        const timer = setTimeout(() => {
            setAnimationComplete(true);
        }, 2500); 

        const handleKeyPress = (e) => {
            if (e.key === 'Enter') {
                navigate('/home');
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        window.addEventListener('resize', initializeRain);


        return () => {
            clearInterval(interval);
            clearTimeout(timer);
            window.removeEventListener('keydown', handleKeyPress);
            window.removeEventListener('resize', initializeRain);
        };
    }, [navigate]);

    useEffect(() => {
        let cancelled = false;
        let nextCycleTimer = null;
        let frameId = null;

        const scrambleFrame = (target, progress) => {
            const maxIndex = Math.max(1, target.length - 1);
            return target
                .split('')
                .map((char, index) => {
                    if (char === ' ') return ' ';

                    // All chars scramble fast first, then resolve character-by-character.
                    const charRevealAt = 0.18 + (index / maxIndex) * 0.64;
                    if (progress >= charRevealAt) return char;

                    const localProgress = Math.max(0, Math.min(1, progress / charRevealAt));
                    if (localProgress > 0.86 && Math.random() < 0.35) return char;
                    return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
                })
                .join('');
        };

        const animateRole = (nextIndex) => {
            const target = ROTATING_ROLES[nextIndex];
            const startedAt = performance.now();

            const tick = (now) => {
                if (cancelled) return;
                const elapsed = now - startedAt;
                const progress = Math.min(1, elapsed / ROLE_ANIMATION_MS);
                setDisplayRole(scrambleFrame(target, progress));

                if (progress < 1) {
                    frameId = requestAnimationFrame(tick);
                    return;
                }

                setDisplayRole(target);
                setRoleIndex(nextIndex);
                nextCycleTimer = window.setTimeout(() => {
                    animateRole((nextIndex + 1) % ROTATING_ROLES.length);
                }, ROLE_SETTLE_MS);
            };

            frameId = requestAnimationFrame(tick);
        };

        const firstTimer = window.setTimeout(() => {
            animateRole(1);
        }, ROLE_SETTLE_MS);

        return () => {
            cancelled = true;
            window.clearTimeout(firstTimer);
            if (nextCycleTimer) window.clearTimeout(nextCycleTimer);
            if (frameId) cancelAnimationFrame(frameId);
        };
    }, []);

    return (
        <div className={`welcome-container ${animationComplete ? 'animation-complete' : ''}`}>
            <canvas ref={canvasRef} className="ascii-canvas"></canvas>

            <div className={`globe-welcome-embed ${animationComplete ? 'visible' : ''}`}>
                <AsciiGlobeView />
            </div>

            {/* <h1 className={animationComplete ? 'visible' : ''}>
                {ip ? `Access: ${ip}` : 'Fetching IP'}
            </h1> */}

            <div className={`enter-options ${animationComplete ? 'visible' : ''}`}>
                <h1 className="enter" onClick={handleEnterClick}>&lt;enter/&gt;</h1>
            </div>

            <div>
                <h2 className={`${animationComplete ? 'visible' : ''}`}>XavierPim_Portfolio</h2>
                <h3 className={`${animationComplete ? 'visible' : ''}`}>{displayRole || ROTATING_ROLES[roleIndex]}</h3>
            </div>
        </div>
    );
}

export default Welcome;
