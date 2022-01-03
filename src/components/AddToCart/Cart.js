import React from 'react';
import { useCart } from 'react-use-cart';
import './Cart.css';
import Navbar from  '../Navbar/Navbar22';

function Cart() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();

    if (isEmpty) return <h1>your cart is Empty</h1>
    return (
        <>
        <Navbar />
        <div>
          <h4 className="total-items"> Cart({totalUniqueItems}) total Items: ({totalItems})</h4>  
          <table className="table">
              <tbody>
                  {items.map((item, index) => {
                      return(
                          <tr key={index}>
                            <td className="td-items">
                                {item.title}&nbsp;&nbsp;
                            </td>
                            <td>
                                {item.price}&nbsp;&nbsp;
                            </td>
                            <td>Quantity:
                                {item.quantity}&nbsp;&nbsp;
                            </td>
                            <td>
                               <button className="btn-incredecre" onClick={() => updateItemQuantity(item.id, item.quantity-1)}>-</button> 
                               <button className="btn-incredecre" onClick={() => updateItemQuantity(item.id, item.quantity+1)}>+</button> 
                               <button className="btn-incredecre" onClick={() => removeItem(item.id)}>Remove item</button>
                            </td>
                          </tr>
                      )
                  })}
              </tbody>
          </table>
          <div>
                <h2 className="total-items">Total price:{cartTotal}</h2>
                
          </div>
          <div>
              <button onClick={() => emptyCart()}>
                  Clear Cart
              </button>
              <button>Buy Now</button>
          </div>
        </div>
        </>
    )
}

export default Cart;
