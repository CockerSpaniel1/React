import React from "react"

const HisUseEffect=()=>{
    const [data, setData] = React.useState([]);

    React.useEffect( function(){
        fetch("https://apiservice.mol.gov.tw/OdService/download/A17000000J-030243-YTl")
        .then(res=>res.json() )
        .then(d=>setData(d) );
        console.log(data)
    }, []);

    const element=data.map((d,index)=>(
        <div key={index} className="about-div">
            <span style={{color:"brown"}}> {d.年度}</span>
            <br/>
            <span>, {d.經濟成長率}</span>
        </div>
     ));

    return (
        <div>
            {element}
            <pre>{JSON.stringify(data, null, 8)}</pre>

        </div>
    )

}
export default HisUseEffect;