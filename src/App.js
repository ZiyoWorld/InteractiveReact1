import React from "react";
//import Navbar from "./lesson28/Navbar";
//import Hero from "./lesson28/Hero";
//import Footer from "./lesson28/Footer";
import './App.css'
import Drinks from "./Drinks";
import Header from "./Header";

class App extends React.Component{
    render(){
        return(
            <div >
             {/* <Navbar />
             <Hero />
             <Footer /> */}
             <Header />
             <div className="main">
             <Drinks />
             <Drinks />
             <Drinks />

             </div>
             
            </div>
        )
    }
}
export default App;