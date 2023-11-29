import React from "react";
import {useParams} from "react-router-dom"

const Product=()=>{
    let {bean}=useParams();
    return(
        <div>
            <h3 style={{paddingLeft:"3vw"}}>我是Product Page</h3>
            <p>本日精選: <span style={{color:"red"}}> {bean} </span> 買一送一</p>
        </div>
    )
}
export default Product;