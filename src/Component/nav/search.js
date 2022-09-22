import React from 'react'
import style from './search.module.scss'
//import { useMediaQuery } from "@material-ui/core";
export default function Search(props) {

  
    const dropdownChangeHandler = (event) => {
        props.onChangeSearch(event.target.value);
      };
  return (
     
      <div className={style.div1} >
    <form  className={style.search}>
        <label>Search:</label>
        <input type="search" value={props.searched} onChange={dropdownChangeHandler}/>
    </form>
</div> 

   
  );
}
