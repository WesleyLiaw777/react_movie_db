import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './pages/Home';
import Search from './pages/Search';
import Movie from './pages/Movie';


function App() {
  return (
    
    <Router>
      <div className="App">
        <Nav/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<Movie/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/search/:keyword" element={<Search/>}/>
      </Routes>
    </Router>
  );
}

export default App;
