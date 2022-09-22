import React from 'react'



export default function reducer(post = [],action) {
  if(action.type==='ADD_TO_CART')
  {
      let cart=post.filter((item)=> item.id===action.payload.id)
      if(cart<1)
      {
          return [...post, action.payload]
      }
      else{
        return post;
      }
      
  }
  if(action.type==="INCREASE")
  {
    const temp=post.map((item) => 
    {
      if(item.id === action.payload.id)
      {
        return { ...item , quantity: item.quantity + 1};
      }
      return item;
    })
    return temp;
  }

  if(action.type==="DECREASE")
  {
    const temp =post.map((item) => 
    {
      if(item.id===action.payload.id)
      {
        return { ...item , quantity: item.quantity - 1};
      }
      return item;
    })
    return temp;
  }

  if(action.type==="Add_Quantity")
  {
    const temp =post.map((item) => 
    {
    if(item.id===action.payload.ids)
      {
        return { ...item , quantity: action.payload.val};
      }
      return item;
    })
    return temp;
  }
  return post;
  
}


