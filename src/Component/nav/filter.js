import React from 'react'
import style from './filter.module.scss';
export default function Filter(props) {

    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
      };
  return (
    
      <div className={style.expenses1}>
        
        <select value={props.selected} onChange={dropdownChangeHandler} >
        <option value='Size'>Size</option>
          <option value='S'>S</option>
          <option value='L'>L</option>
          <option value='XL'>XL</option>
        </select>
      </div>
    
  )
}
