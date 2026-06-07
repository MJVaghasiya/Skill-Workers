import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Contact from './components/Contact';
import About from './components/About';
import OurServices from './components/OurServices';
import Job from './components/Job';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AboutUs' element={<About />} />
        <Route path='/ContactUs' element={<Contact />} />
        <Route path='/OurServices' element={<OurServices />} />
        <Route path='/Job' element={<Job />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
