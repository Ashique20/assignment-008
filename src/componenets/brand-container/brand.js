import React from "react";
import './brand.css'

const Brand = (props)=>{
    const {car,handleClick}=props;
    const{img,name,price}=car;
    return(
       <div className="brand">
         
            <div><img src={img} alt="" /></div>
            <div className="brand-info">
               <div className="brand-name"> <b><p>Name:{name}</p></b></div>
               <p> price:${price}</p>
            </div>
            
        
        <button onClick={()=>handleClick(car)}  className="car-btn"><p>Click</p></button>
       </div>
        
    )
}

export default Brand;