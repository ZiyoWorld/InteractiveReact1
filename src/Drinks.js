import React from "react";
import './Drinks.css'

class Drinks extends React.Component{
    render(){
        return(
            <div>
                <div className="card">
                        <img className="main-img" src={this.props.img} alt="" />
                         <h1>{this.props.name}</h1>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                         <h1 className="price">$ {this.props.price}</h1>
                         <button type="button">VIEW PRODUCT</button>
                <div className="products">
                    <p>-{this.props.off}%</p>
                </div>
                
                </div>
                
            </div>
        )
    }
}
export default Drinks;