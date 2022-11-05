import React, { useEffect, useState } from "react";

import Brand from "../brand-container/brand";
import'./cars.css'
import Cart from "../choise-container/Cart";

const Cars =()=>{
    const [cars,setCars]=useState([]);
    useEffect(()=>{
        fetch("fakedb.json")
        .then(res=> res.json())
        .then(data=>setCars(data))
    },[])
   const [cart,setCart] = useState([]);
   const handleClick=event=>{
        
    if (cart.length < 4) {
        const exixt = cart.find(car => car.id === event.id)
        if (!exixt) {
            const newCart = [...cart, event]
            setCart(newCart)
        }
    }
    else { alert("you can't add cars more then four") }
}

const randomNumber = n => {
    let num = (Math.floor(Math.random() * 10))

    if (num > n) {
        num = randomNumber(n)
    }
    if (num === undefined) {
        num = randomNumber(n)
    } else {
        return num
    }
}

// handle randome gun
const [randomCar, setRandomCar] = useState({})

const handleChoose = () => {
    const i = randomNumber(cart.length - 1)
   
    setRandomCar(cart[i])
}


const handleAgain = () => {
    setCart([])
    setRandomCar({})
}



    
   
        
        
        return(
            <div className="cars-container">
                <div className="brand-container"> 
               {
                cars.map(car=><Brand car={car}
                    handleClick={handleClick}
                    key={car.id}
                    >
                   
                </Brand> )
               }
                </div>
                <div className="cart-container">
          
                <h2>Selected Cars</h2>
                {cart.map(car => <Cart key={car.id} car={car}></Cart>)}
               
                <div><button onClick={handleChoose} className="btn">Choose One for me</button>   </div>
                {randomCar.id && <Cart car={randomCar}></Cart>}
                <div onClick={handleAgain} className="btn">Clear Cart</div>
            </div>
                
        

                </div>
                
        );
            }
            
  

export default Cars;