import React, { useContext } from 'react'
import './Cart.css'
import { StoreContect } from '../../contect/StoreContect'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const {cartItems, food_list, removeFromCart, getTotalCartAmount}= useContext(StoreContect)

  const navigate = useNavigate();

  return (
    <div className='cart'>
       <div className="cart_items">
         <div className="cart_items_title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
         </div>
         <br />
         <hr />
         {food_list.map((item, index)=>{
            if(cartItems[item._id]>0){
               return(
                  <div>
                     <div className="cart_items_title cart_items_item" key={index}>
                     <img src={item.image} alt="" />
                     <p>{item.name}</p>
                     <p>${item.price}</p>
                     <p>{cartItems[item._id]}</p>
                     <p>${item.price*cartItems[item._id]}</p>
                     <p onClick={()=>removeFromCart(item._id)} className='cross'> x</p>
                  </div>
                  <hr />
                  </div>
               )
            }
         })}
       </div>
      <div className="cart_bottom">
        <div className="cart_totlal">
           <h2>Cart Totals</h2>
           <div>
           <div className="cart_total_tetails">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
           </div>
           <hr />
           <div className="cart_total_tetails">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0? 0:2}</p>
           </div>
           <hr />
           <div className="cart_total_tetails">
             <b>Total</b>
             <b>${getTotalCartAmount()===0? 0: getTotalCartAmount()+2}</b>
           </div>
           </div>
           <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart_promocode">
           <div>
             <p>If you have a promo code, Enter it here</p>
             <div className="cart_promocde_input">
               <input type="text" placeholder='promo code' />
               <button>submit</button>
             </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
