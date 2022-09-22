import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSmile } from '@fortawesome/free-solid-svg-icons';
import style from "./cart.module.scss";
//import { PropaneSharp } from '@mui/icons-material';

//import image1 from './view.jpg'
//const add_to_cart=[];
 function CartItem(props) {
  
  //const data=useSelector((state)=> state);
  // console.log(data);
    const dispatch=useDispatch();
    
    const changedvalue =(event) =>
      {
        const val=event.target.value;
        const ids=props.id
        dispatch({type:"Add_Quantity",payload:{ids,val}})
       
      }

     const addOnhandleChange=(id,image,name,price,quantity)=>  {
      
         dispatch({
          type: "ADD_TO_CART",
           payload: {id,image,name,price,quantity},
         });

       };

      
    // props.ta.map((item) =>
    // { 
      return(
        <div key={props.id}>
            <table>
            <tr>
                <td style={{flexbasis: "32%"}}><img className={style.img2} src={props.image}/></td>
                <td><a href="#" id="size">{props.name}</a></td>
                <td><a href="#" id="size">{props.color}</a></td>
                <td><FontAwesomeIcon icon={faSmile }  color='green'/> <span style={{color: "green"}}>{props.stock}</span></td>
                <td><span style={{fontSize: "15px"}}>${props.price}</span></td>
                <td ><div style={{display: "flex"}}>
                        <input type="text" className={style.div1} onChange={changedvalue} value={changedvalue}/>
                        
                        <div className={style.div2}><FontAwesomeIcon icon={faShoppingCart} color="white" className={style.cart}/></div>
                        <input type="checkbox" checked={props.select} onClick={()=>addOnhandleChange(props.id,props.image,props.name,props.price,props.quantity)}/>
                    </div>
                </td>
            </tr>
        </table>
        
        </div>
      )
    //   }
    // )
      
}

export default CartItem;
