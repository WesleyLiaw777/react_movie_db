import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './pages/Home';
// import Search from './pages/Search';
import Movie from './pages/Movie';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    
    <Router>
      <div className="App">
        <Nav/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<Movie/>}/>
        <Route path="/search" element={<SearchResults/>}/>
        <Route path="/search/:keyword" element={<SearchResults/>}/>
        <Route path="/search/:keyword/:id" element={<Movie/>}/>
      </Routes>
    </Router>
  );
}

export default App;
