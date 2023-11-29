import React from "react"
import {useState } from "react";


function MyInput(){
    const  [coffee,setCoffee]=useState("");
    const  [price,setPrice]=useState(0);
    const  [qty,setQty]=useState(0);
    const  [total,setTotal]=useState(0);

    function showCoffee(e){
        setCoffee(e.target.value);
    }

    return (
        <div>
            <input type="text" placeholder='Enter Coffee' onChange={showCoffee} /><span>{coffee}</span><br/>
            <input type="number" placeholder="Enter Price" onChange={(e)=>setPrice(e.target.value)}/><span>{price}</span><br/>
            <input type="number" placeholder="Enter Qty" onChange={(e)=>setQty(e.target.value)}/><span>{qty}</span><br/>

            <button onClick={()=>setTotal(price*qty)}>結帳</button>
            <span>總計: {total}元</span>


        </div>
    )
}

export default MyInput;