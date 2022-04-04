import React from "react";
import './Card.css'

class Card extends React.Component{
    render(){
        return(
            <div className="card">
                <div className="card_body">
                    <img src={this.props.img}                  
                       alt="" />
                     
                     <h2 className="card-title">{this.props.title}</h2>
                     <p className="card_deckription">
                        {this.props.disks}
                     </p>
                     <h1 className="card-price">${this.props.price} </h1>
                     <button type="button" className="card-btn">
                        VIEW PRODUCT
                     </button>
                     <span className="card-price-off">{this.props.off}%</span>
                
                
                
                </div>
                
            </div>
        )
    }
}
export default Card;