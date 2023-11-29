import React from "react"
import MyState from "./MyState"
import MyProps from "./MyProps";
import Coffee from "./Coffee";
import MyInput from "./MyInput"


export default function Main(){
    const mystyle ={padding:"3vw"}
    const blackFriday=['arabica','robusta','liberia'];
    const d=new Date();
    const myMonth=d.getMonth()+1

    return (
        <main style={mystyle}>
            <p>現在是{myMonth}月,正是黑五大促銷</p>
            <p>促銷的品項有:{blackFriday.map((e)=>(<li>{e}</li>))}</p>
            <p></p>
            <div>
                <MyState/>
                <hr/>
                <MyProps subject="衣索比亞咖啡 黑五特價中"/>
                <hr/>
                <div style={{display:"inline-flex"}}>
                    <Coffee 
                        coffee={require("../images/coffee/arabica.png")}
                        heart={4.5}
                        word="店長強力推薦"
                        price="半磅 500元"
                        desc="原產於東非伊索比亞南部的阿比西 尼亞高原，現今沿海尚有野生種。"
                        origin="伊索比亞" />
                    <Coffee 
                        coffee={require("../images/coffee/robusta.png")}
                        heart={4.3}
                        word="店長強力推薦"
                        price="半磅 450"
                        desc="羅布斯塔咖啡屬於剛果咖啡的突變 種，原產於西非剛果，本種有缺乏香氣之 憾，苦味較強，酸味不足。"
                        origin="剛果" />
                    <Coffee 
                        coffee={require("../images/coffee/liberia.png")}
                        heart={4.0}
                        word="店長強力推薦"
                        price="半磅 400元"
                        desc="原產於西非賴比瑞亞，本種香味不佳， 苦味較強。除少數生產國自己消費外，只有歐洲人飲用賴比瑞亞咖啡。"
                        origin="賴比瑞亞" />
                </div>
                <hr/>
                <MyInput/>
                </div>
        </main>

    )
}
