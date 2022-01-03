import React from 'react'
import ItemCard from './ItemCard';
import './AddToCard.css';
import data  from '../Searchbar/data';
import Navbar from '../Navbar/Navbar22';

function AddToCart() {
    return (
        <>
        <Navbar />
        <div>
            <h1 className="heading">All Items</h1>
            {data.map((item, index) => {
                return(
                    <ItemCard img={item.img} title={item.title} price={item.price} item={item}  key={index}  /> 
                )
            })};
        </div>
        </>
    )
}

export default AddToCart;
