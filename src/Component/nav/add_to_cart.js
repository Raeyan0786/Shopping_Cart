import React from 'react'
//import { Button } from '@material-ui/core'
//import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import style from './add_to_cart.module.scss'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';




export default function AddToCart(props) {
 
  //console.log(props.adddata);

  return (
    <div className={style.div1} >
      <Link to="/checkout/" >
      <Button variant='contained'  className={style.cart} >Add TO Cart</Button>
        </Link>
        
    </div>
  )
}
