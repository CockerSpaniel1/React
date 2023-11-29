import React from "react"
import {useState } from "react";


const MyState=()=>{

    const  [qty,setQty]=useState(0);
    return (
        <div>

            <h3>Black Friday On Sale</h3>
            <button onClick={()=>{qty>=10?setQty(10):setQty(qty+1)}}>咖啡豆+1,  請點這裡</button>
            <span style={{color:"red", padding:"10px"}}>{qty}</span>
            <button onClick={()=>{qty<=0?setQty(0):setQty(qty-1)}}>咖啡豆-1,  請點這裡</button>
        </div>

    )
}
export default MyState;