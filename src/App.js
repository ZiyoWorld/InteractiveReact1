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
             <Drinks img="https://www.pngplay.com/wp-content/uploads/12/Strawberry-Juice-Transparent-File.png" name="Orange Juice" price="4.99" off="30" />
             <Drinks img="https://freepikpsd.com/file/2019/10/juice-box-png-2-Transparent-Images.png" name="Apple Box" price="2.99" off="20" />
             <Drinks img="https://pulpy.ru/api/uploads/c84de145fabd4562ae57eee0f8b40462.png" name="Pulpy red" price="1.59" off="-" />
             <Drinks img="https://pulpy.ru/api/uploads/2d830813a08e4466bca42418946c1872.png" name="Pulpy yellow" price="1.59" off="-" />
             <Drinks img="https://www.pngplay.com/wp-content/uploads/12/Strawberry-Juice-Transparent-File.png" name="Orange Juice" price="4.99" off="30" />
             <Drinks img="https://www.pngplay.com/wp-content/uploads/12/Strawberry-Juice-Transparent-File.png" name="Orange Juice" price="4.99" off="30" />
             

             </div>
             
            </div>
        )
    }
}
export default App;