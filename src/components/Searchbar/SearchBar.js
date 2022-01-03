import React, { useState } from 'react';
import './Searchbar.css';
import data from './data';
import Navbar from '../Navbar/Navbar22';

const Searchbar = () => {
    const [Filter, setFilter] = useState('');
    const searchText = (event) => {
        setFilter(event.target.value);
    }
    console.log(searchText);

    let dataSearch = data.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(Filter.toString().toLowerCase())
            )
        });

    return (
        <>
        <Navbar />
        <div>
            <input className="search-input" type="search" 
            name="name" placeholder="search" 
            value={Filter} 
            onChange={searchText.bind(this)} 
            />
        </div>
        { dataSearch.map((item, index) => {
            return (
                <div className='card-product'>
                <img src={item.img} alt="card"/>
                <div className='card-product-infos'>
                <h2>{item.title}</h2>
                  <p>Product description with <strong>relevant info</strong> only.</p>
                </div>
              </div>      
              )
            }) }
            </>
    )
    
}

export default Searchbar;
