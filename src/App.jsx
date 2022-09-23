import "./App.css";
import Navbar from "./components/Navbar";
import PropagateLoader from 'react-spinners/PropagateLoader' ;
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Section from "./components/Section";


function App() {
  const [loading, setLoading] = useState(false);

  const override: React.CSSProperties = {
  display: "block",
  margin: "20%",
  borderColor: "red",
};

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      {loading ?
        <PropagateLoader
          color={"#3d2514"}
          Loading={loading}
          cssOverride={override}
          size={30}
        />
      : 
        <>
        <Navbar/>
          <Header/>
          <Section/>
          <Products/>
          <About/>
          <Contact/>
          <Footer />
        </>
      }
    </div>
  );

}

export default App;
