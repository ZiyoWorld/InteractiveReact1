import React from "react";
import './Drinks.css'

class Drinks extends React.Component{
    render(){
        return(
            <div>
                <div className="card">
                        <img className="main-img" src="https://www.pngplay.com/wp-content/uploads/12/Strawberry-Juice-Transparent-File.png" alt="" />
                         <h1>Orange Juice</h1>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                         <h1 className="price">$ 4.99</h1>
                         <button type="button">VIEW PRODUCT</button>
                <div className="products">
                    <p>-30%</p>
                </div>
                
                </div>
                
            </div>
        )
    }
}
export default Drinks;