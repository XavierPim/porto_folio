import './css/App.css';
import './pages/welcome.js';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Welcome from './pages/welcome.js';
import Home from './pages/home.js';
import Expertise from './pages/expertise.js'
import Experience from './pages/experience.js'
import Projects from './pages/projects.js'
import Contact from './pages/contact.js'

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/" element={<Welcome/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/expertise" element={<Expertise/>} />
      <Route path="/experience" element={<Experience/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
 