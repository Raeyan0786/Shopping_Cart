import React from 'react'
import Card from '../cart/card'
//import {useDispatch} from 'react-redux';
//import style from '../checkout/checkout.module.scss';
import CheckoutItem from './CheckoutItem';
import Checkoutitem1 from './checkoutitem1'
//import CartData from '../cart/CartItem/add_to_cart'
import { useDispatch,useSelector } from 'react-redux';
export default function Checkout() {

    

     const data = useSelector(state =>
       state
     )
	  const dispatch=useDispatch();
    //console.log(data.map((it)=> it.id));
         //console.log(data)
   
  return (
    <Card>
        <div style={{display:"flex"}}>
        <div style={{width:"70%"}}>
            <table>
                <tr>
                    <th >Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
			</table>
            <CheckoutItem data1={data}/>
        </div>
        <div style={{width:"30%"}}>
            <Checkoutitem1 data2={data}/>
        </div>
        </div>
    </Card>
  )
}
