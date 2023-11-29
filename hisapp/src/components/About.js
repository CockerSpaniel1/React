import React from "react";
import Data from "./Data"


const About=(props)=>{
    const [pattern,setPattern]=React.useState(Data);
    const [pic,setPic]=React.useState(null);

    function cta(id){
        switch (id){
            case 1:
                setPic(require("../images/coffee/coffee01.jpg") )
                break 
            case 2:
                setPic(require("../images/coffee/coffee02.jpg") )
                break 
            case 3:
                setPic(require("../images/coffee/coffee03.jpg") )
                break 
            case 4:
                setPic(require("../images/coffee/coffee04.jpg") )
                break 
            case 5:
                setPic(require("../images/coffee/coffee05.jpg") )
                break 
            case 6:
                setPic(require("../images/coffee/coffee06.jpg") )
                break 
            case 7:
                setPic(require("../images/coffee/coffee07.jpg") )
                break 
        }
    };



    const element=pattern.map(d=>(
        <div className="about-div" style={{backgroundColor:d.color}} id={d.id}  onClick={()=>cta(d.id)} key={d.id.toString()}> 
            <p >{d.id},{d.color}</p>
            
       
        </div>
        
    ))

    return(

        <div style={{paddingLeft:"3vw"}}>
            <h3 >我是About Page</h3>
            <h5 >map()</h5>
            <hr/>
            {element}
            <br></br>
            <img src={pic} className="about-img"></img>
        </div>
    )
}
export default About;