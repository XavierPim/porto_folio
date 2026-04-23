import "../css/globe-v2.css";
import { useNavigate } from "react-router-dom";
import AsciiGlobeView from "../components/ascii-globe-view";

function GlobeV2() {
  const navigate = useNavigate();

  return (
    <div className="globe-v2-container">
      <div className="globe-v2-topbar">
        <div>/globe-v2/</div>
        <div className="globe-v2-actions">
          <button onClick={() => navigate("/home")}>1.0 Home</button>
          <button onClick={() => navigate("/")}>Welcome</button>
        </div>
      </div>

      <div className="globe-v2-frame" role="region" aria-label="ASCII Globe Prototype">
        <AsciiGlobeView />
      </div>
    </div>
  );
}

export default GlobeV2;
