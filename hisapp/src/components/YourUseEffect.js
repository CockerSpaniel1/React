import {useEffect,useState} from "react"


const YourUseEffect=()=>{
    const [count, setCount] = useState(0)
    const [calc, setCalc] =useState(0)

    const student = {
        code:200,
        msg:"成功",  
        info:{ id:count, name:"筷花丸", w:60.9, h:180.0 } }

    //每一次都會執行    
    useEffect(
        ()=>{
            console.log("Hello, 大家午安")
        }
    )
    //只執行程式第一次render時，按下按鈕時，不再執行
    useEffect(
        ()=>{
            console.log(student)
        }, []
    )
    //按下按鈕時，會執行，因為count有更新
    useEffect(
        ()=>{
            console.log(student)
        }, [count]
    )
    //按下按鈕時，不會執行，因為count沒有更新
    useEffect(
        ()=>{
            console.log(student['info'])
        }, ["x","y","z"]
    )

    return(
    <div>
        <span style={{paddingRight:"0.5rem"}}>count: {count}</span> 
        <button onClick={()=>setCount(count+1)}>計算</button>
        <span style={{paddingRight:"0.5rem"}}>calc: {calc}</span> 
    </div>)


}


export default YourUseEffect