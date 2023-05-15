import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './pages/Home';
import Search from './pages/Search';


function App() {
  return (
    
    <Router>
      <div className="App">
        <Nav/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
    </Router>
  );
}

export default App;
