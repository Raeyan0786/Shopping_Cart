import { ProductionQuantityLimits } from '@mui/icons-material';
import Button from '@mui/material/Button';
import React from 'react'
import {useState} from 'react';
import style from './checkoutitem1.module.scss'
export default function Checkoutitem1(props) {
    const Totalprice=(total,current) =>
    {
        return total+current.price*current.quantity;
    }
    const total = props.data2.reduce(Totalprice,0)
    
  return (
    <div className={style.div1}>
        <h1>Cart Detail</h1>
        <div style={{borderBottom:'solid gainsboro'}}>
            <p><span style={{fontSize:"20px"}}>subtotal</span><span style={{float:'right',paddingRight:"10px",color:"blue"}}>${total}</span></p>
        </div>
        <p><span style={{fontSize:"20px",fontWeight:"bold"}}>subtotal</span><span style={{float:'right',fontSize:"20px",fontWeight:"bold",color:"blue",paddingRight:"10px"}}>${total}</span></p>
        <Button variant='contained' size='large' className={style.btn}>PROCEED TO CHECKOUT</Button>
    </div>
  )
}
