import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Capture from './Pages/Capture/Capture';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Learn from './Pages/Learn/Learn';
import News from './Pages/News/News';
import Identify from './Pages/Identify/Identify';
import Help from './Pages/Help/Help';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/capture" element={<Capture />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/news" element={<News />} />
            <Route path="/identify" element={<Identify />} />
            <Route path="/news" element={<News />} />
            <Route path="/help" element={<Help />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;