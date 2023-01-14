import './css/App.css';
import {Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/home';
import Footer from './components/Footer';
import Coran from './pages/coran';
import SearchAyah from './pages/searchAyah';


function App() {

  


  return (
    
    <div className="App">
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coran" element={<Coran />} />
          <Route path="/searchAyah/:data" element={<SearchAyah />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
