import React from "react";
import {useNavigate} from "react-router-dom"

// import {useParams} from "react-router-dom"
import {useState } from "react";



const News=()=>{
    const navigate=useNavigate();
    
    const  [coffee,setCoffee]=useState("羅布斯塔");
    return(
        <div>
            <h3 style={{paddingLeft:"3vw"}}>最新消息</h3>
            <button onClick={()=>{navigate(`/Product/精品咖啡`)}} className="cta">耶加雪菲買一送一</button>
            <button onClick={()=>{navigate("/Service")}} className="cta">免費磨豆</button>

            <hr/>

            <input type="text" placeholder='Enter Coffee' onChange={(e)=>setCoffee(e.target.value)} /><span>{coffee}</span><br/>


            <button onClick={()=>{navigate(`/Product/${coffee}`)}}>GO</button>

        </div>
    )
}
export default News;