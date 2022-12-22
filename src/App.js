import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import './App.css';

const App = () => (
  <div className="App">
    <header id="header">
      <Navigation />
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </div>
);

export default App;
