import './css/App.css';
import './pages/welcome.js';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Welcome from './pages/welcome.js';
import Home from './pages/home.js';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/" element={<Welcome/>} />
      <Route path="/home" element={<Home/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
 