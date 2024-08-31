import { useNavigate } from 'react-router-dom';
import worldMap from "../ascii art/map";
import '../css/welcome.css';

function Welcome(){
    const navigate = useNavigate();
    const handleEnterClick = () => {
        navigate('/home');
      };

    return(
        <div className="welcome-container:">
    <pre className="ascii-art">{worldMap}</pre>
    <h1 id="typewriter">Welcome to my Portfolio</h1>
    <h1 className="enter" onClick={handleEnterClick}>&lt;enter/&gt;</h1>
    <h2>Xavier Pimentel</h2>
    <h3>A Software Developer</h3>
    </div>
    );
}
export default Welcome;