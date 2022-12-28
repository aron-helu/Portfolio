import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import About from './components/About/About';
import './App.css';
import Skill from './components/Skill/Skill';

const App = () => (
  <div className="App">
    <header id="header">
      <Navigation />
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skill" element={<Skill />} />
    </Routes>
  </div>
);

export default App;
