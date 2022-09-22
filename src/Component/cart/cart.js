import React from 'react'
import { useState } from 'react';
import Filter from '../nav/filter';
import Search from '../nav/search';
//import { useMediaQuery } from "@material-ui/core";
import AddToCart from '../nav/add_to_cart';
//import icon from '@material-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSmile } from '@fortawesome/free-solid-svg-icons';
import style from "./cart.module.scss";
import CartItem from './CartItem';
import { useDispatch,useSelector } from 'react-redux';
import Card from './card';
 function Cart(props) {
	
	const data=useSelector((state)=> state);
	//const ts =JSON.parse(data)
  	//console.log(data.map((it)=> it.id));
    const dispatch=useDispatch();

     
	
	const [filtered,setFiltered]=useState("Size");
	const [search,setSearch]=useState("");

	const filterChangeHandler = selectedYear => {
		setFiltered(selectedYear);
	  };

	const SearchChangeHandler = selectQuery =>{
		setSearch(selectQuery);
	};
	const filteredSearch=props.list.filter((expense) => {
		return expense.type.toLowerCase().includes(search);
	  });
	const filteredExpenses = props.list.filter((expense) => {
		return expense.size.toString()===filtered;
	});
	  let expensesContent = <p>No expenses found.</p>;

	  if (filteredExpenses.length > 0 )
	  {
		expensesContent=filteredExpenses.map((item) => (<CartItem
			
			it={item}
			id={item.id}
			image={item.img}
			name={item.name}
			color={item.color}
			stock={item.stock}
			price={item.price}
			quantity={item.quantity}/>))
	  }

	  else if (filteredSearch.length > 0 )
	  {
		expensesContent=filteredSearch.map((item) => (<CartItem
			id={item.id}
			image={item.img}
			name={item.name}
			color={item.color}
			stock={item.stock}
			price={item.price}
			quantity={item.quantity}/>))
	  }
	  else if(filtered==="Size" && search==="")
	  {
		expensesContent=props.list.map((item) =>(<CartItem
			id={item.id}
			image={item.img}
			name={item.name}
			color={item.color}
			stock={item.stock}
			price={item.price}
			quantity={item.quantity}/>) 
			
		)
	  }
	  return(
				<Card>
					 
          <div style={{display:"flex"}}>
					<Filter selected={filtered} onChangeFilter={filterChangeHandler} />
					<Search searched={search} onChangeSearch={SearchChangeHandler}/>
					<AddToCart adddata={data}/>
			</div>
            
					
					
					
			<table>
                <tr>
                    <th style={{borderTopLeftRadius: "5px"}}>Image</th>
                    <th>Name</th>
                    <th>Color</th>
                    <th>Stock</th>
                    <th>Price</th>
                    <th className={style.th_end}>Buy</th>
                </tr>
				</table>
			{expensesContent};
		</Card>
			
	
	  );
	 

  
}

export default Cart;
