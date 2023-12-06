import React from "react";
import $ from "jquery";
import { useEffect } from "react";

const JQ=()=>{

    useEffect(()=>{
        $("#btnn").on("click", function(){
          window.alert("Good Morning");
        });
    },[])
    return(
        <div>
            <button id="btnn" >Click me</button>
        </div>
    )
}
export default JQ;