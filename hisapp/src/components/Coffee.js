import React from "react"
import heart from "../images/coffee/heart.svg"
import like from "../images/coffee/like.svg"
import Supplier from "../Supplier";

const Coffee=(props)=>{
    return (
        <div>
            <h3>Cafe Time</h3>
            <img src={props.coffee} alt="coffee" className="coffee-img"/>
            <div>
                <img src={heart} alt="heart" className="coffee-svg" />
                <span>{props.heart} |</span>
                <span> { props.word}</span>
                <img src={like} alt="heart" className="coffee-svg"/>
                <span>{props.price}</span>
                <p>{props.desc} | {props.origin}</p>
                <Supplier id={1} name="Louisa" tel="07-123456" address="地址"/>
            </div>
        </div>
    );

}

export default Coffee