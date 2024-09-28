import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContect } from '../../contect/StoreContect'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContect)

  return (
    <form className='place_order'>
        <div className="place_order_left">
           <p className="title">Delivery Infomation</p>
           <div className="multi_fields">
             <input type="text" placeholder='First name' />
             <input type="text" placeholder='last name' />
           </div>
           <input type="email" placeholder='Email address' />
           <input type="text" placeholder='Street' />
           <div className="multi_fields">
             <input type="text" placeholder='City ' />
             <input type="text" placeholder='State' />
           </div>
           <div className="multi_fields">
             <input type="text" placeholder=' Zip code' />
             <input type="text" placeholder=' Country' />
           </div>
           <input type="text" placeholder='Phone' />
        </div>
        <div className="place_order_right">
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
           <button>PROCEED TO PAYMENT</button>
        </div>
        </div>
    </form>
  )
}

export default PlaceOrder
