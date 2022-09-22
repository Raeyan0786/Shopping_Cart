import React from 'react'
import {useState} from 'react'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import {  faSmile } from '@fortawesome/free-solid-svg-icons'
import IconButton from '@mui/material/IconButton';
import PlusIcon from '@mui/icons-material/Add';
import SubIcon from '@mui/icons-material/Remove';
import style from "./checkoutitem.module.scss";
import Checkoutitem1 from './checkoutitem1'
import Card from '../cart/card';

import image1 from '../cart/view.jpg'
import { useDispatch,useSelector } from 'react-redux';
export default function CheckoutItem(props) {

    //const data=useSelector((state)=> state);
    //console.log(data);
    //const dispatch=useDispatch;
    const dispatch=useDispatch();
    //const [itemCount, setItemCount] = useState(1);
    //const [total1, settotal] = useState(25);
    //let Sub2=props.data1.price;

        
        //Subtotal=Subtotal*itemCount;
        
      

    // const Sub=() => {
    //     if(itemCount>0)
    //     {
    //         setItemCount(itemCount - 1);
    //         setSubtotal(Subtotal-Sub2);
    //         //Subtotal=Subtotal/itemCount
    //     }
        
    //   };
  return (
      <div >
      {props.data1.map((item) => {
        return(<table>
          <tr>
              <td style={{flexbasis: "32%"}}><img className={style.img2} src={item.image} alt='raeyan'/></td>
              <td>{item.name}</td>
              <td><span style={{fontSize: "15px"}}>${item.price}</span></td>
              <td><IconButton aria-label="delete" onClick={() => dispatch({type: "INCREASE" , payload:item})}>
              <PlusIcon />
            </IconButton > <span style={{color: "green"}}>{item.quantity}</span>
            <IconButton aria-label="delete" onClick={() => dispatch({type: "DECREASE" , payload:item})}>
              <SubIcon />
            </IconButton></td>
              <td><span style={{fontSize: "15px"}} >${item.price * item.quantity}</span></td>
          </tr>
          </table>);
      })}
    </div>

    
    

    
  )
  
}
