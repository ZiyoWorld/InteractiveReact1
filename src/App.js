import React from "react";
//import Navbar from "./lesson28/Navbar";
//import Hero from "./lesson28/Hero";
//import Footer from "./lesson28/Footer";
import Header from "./Header";
import Card from "./Card";
class App extends React.Component{
    render(){
        return(
            <div>
             {/* <Navbar />
             <Hero />
             <Footer /> */}
             <Header />
             <div className="wrapper">

               <Card 
               img="https://www.pngplay.com/wp-content/uploads/12/Strawberry-Juice-Transparent-File.png"
               title="Orange Juice"
               disks=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ratione."
               price="4.99"
               off="-30"
               
               />
               <Card 
               img="https://www.pngplay.com/wp-content/uploads/12/Strawberry-Juice-Transparent-File.png"
               title="Orange Juice"
               disks=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ratione."
               price="4.99"
               off="-30"
               
               />
               <Card 
               img="https://www.pngplay.com/wp-content/uploads/12/Strawberry-Juice-Transparent-File.png"
               title="Orange Juice"
               disks=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ratione."
               price="4.99"
               off="-30"
               
               />
               <Card 
               img="https://www.pngplay.com/wp-content/uploads/12/Strawberry-Juice-Transparent-File.png"
               title="Orange Juice"
               disks=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ratione."
               price="4.99"
               off="-30"
               
               />
               <Card 
               img="https://www.pngplay.com/wp-content/uploads/12/Strawberry-Juice-Transparent-File.png"
               title="Orange Juice"
               disks=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ratione."
               price="4.99"
               off="-30"
               
               />
               <Card 
               img="https://www.pngplay.com/wp-content/uploads/12/Strawberry-Juice-Transparent-File.png"
               title="Orange Juice"
               disks=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ratione."
               price="4.99"
               off="-30"
               
               />
             </div>
             
             
             
            </div>
        )
    }
}
export default App;