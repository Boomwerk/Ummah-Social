import './css/App.css';
import {Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/home';
import Footer from './components/Footer';
import Coran from './pages/coran';
import SearchAyah from './pages/searchAyah';
import Mentionlegal from './pages/mentionlegal';


function App() {

  


  return (
    
    <div className="App">
      <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/coran" element={<Coran />} />
          <Route exact path="/searchAyah/:data" element={<SearchAyah />} />
          <Route path="/mention-legales" element={<Mentionlegal/>}></Route>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
