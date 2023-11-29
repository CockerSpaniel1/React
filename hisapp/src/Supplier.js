import React from "react"

function Supplier({id, name ,address ,tel}){
    const myStyle={
        fonSize:"0.8em",
        color:"gray"
    }
    
    
    return (
      
        <div style={myStyle}>
            <span>{id} | {name} | {tel} | {address}</span>
        </div>
    )

}

export default Supplier;