import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form"
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";


function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/detail" element={<Detail/>}/>
            <Route path="/favs" element={<Favs/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
