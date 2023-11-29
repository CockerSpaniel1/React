import React from "react";


class MyProps extends React.Component{

    constructor(props){
        super(props);
        this.state={
            name:"Arabica",
            price:500,
            desc:"原產於東非伊索比亞南部的阿比西 尼亞高原，現今沿海尚有野生種。",
            origin:"伊索比亞",
            qty:0,
            baking:"深焙"
        };

    }    

    render(){
        return(
            <div>
                <h1>{this.props.subject}</h1>
                <p> 品項: {this.state.name} |
                    介紹: {this.state.desc} |
                    產地: {this.state.origin} |
                    價格: {this.state.price} |
                    <br/>
                    
                    您購買{this.state.qty} 項，總共{this.state.qty * this.state.price}元，請結帳，謝謝!

                </p>
                <button onClick={()=>{this.state.qty>=10?this.setState({qty:10}):this.setState({qty:this.state.qty +1})}}>咖啡豆+1,  請點這裡</button>
                <button onClick={()=>{this.state.qty<=0?this.setState({qty:0}):this.setState({qty:this.state.qty-1})}}>咖啡豆+1,  請點這裡</button>
            
                <YourProps baking={this.state.baking}/>              
            
            
            </div>
        )
    }


}
class YourProps extends React.Component{
    render(){
        return(
            <p>烘焙: {this.props.baking}</p>

        )

    }

}






export default MyProps;