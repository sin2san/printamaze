import React from 'react';
import { useCart } from 'react-use-cart';

function ItemCard(props) {
    const { addItem } = useCart();
    return (
         <div className="card">
          <div className="card-trip">
           <img src={props.img} alt="envelope" />
         <div className="card-trip-infos">
         <div>
            <h2>{props.title}</h2>
         </div>
            <h2 className="card-trip-pricing">{props.price}</h2>
            <button className="btn-add-item" onClick={() => addItem(props.item)} >AddToCart</button>
         </div>
         </div>
        </div>
    )
}

export default ItemCard;
