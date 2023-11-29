import {useEffect,useState} from "react"



const MyUseEffect=()=>{
    const [count, setCount] = useState(0)
    const [calc, setCalc] =useState(0)


    //useEffect(callback function, [array]) 
    //array會與原先的值做比較,如果省略了,則在render的時候, 會重新執行
    useEffect(
        ()=>{
            setCalc(count*2)
            console.log("calc=", calc)

        },[count]
    )

    return(
    <div>
        <span style={{paddingRight:"0.5rem"}}>count: {count}</span> 
        <button onClick={()=>setCount(count+1)}>計算</button>
        <span style={{paddingRight:"0.5rem"}}>calc: {calc}</span>
    </div>)


}


export default MyUseEffect