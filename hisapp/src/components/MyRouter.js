import React from "react";
import {BrowserRouter, Link, Route, Routes,NavLink} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import News from "./News"
import Product from "./Product"
import Service from "./Service"
import logo from "../images/coffee/coffee01.jpg"
import Header from "./Header"
import Error from "./Error"
import MyFirestore from "./MyFirestore";
import YourFirestore from "./YourFirestore";


const MyRouter=(props)=>{
    const myStyle={color:"yellowgreen"}
    return (
        <BrowserRouter>
            <nav>
                <div className="link-div">
                    <img src={logo} alt="logo" className="link-img"/>
                    <Link to="/" className="link-to">HOME</Link>
                    <Link to="/About" className="link-to">ABOUT</Link>
                    <Link to="/News" className="link-to">NEWS</Link>
                    <Link to={`/Product/${props.coffee}`} className="link-to">PRODUCT</Link>
                    <Link to="/Service" className="link-to">SERVICE</Link> 
                    <Link to="/MyFirestore" className="link-to">MyFirestore</Link> 
                    <Link to="/YourFirestore" className="link-to">YourFirestore</Link> 
{/* 
                    <NavLink to="/" className="link-to" style={({isActive})=>isActive?myStyle:undefined}>HOME</NavLink>
                    <NavLink to="/About" className="link-to" style={({isActive})=>isActive?myStyle:undefined}>ABOUT</NavLink>
                    <NavLink to="/News" className="link-to" style={({isActive})=>isActive?myStyle:undefined}>NEWS</NavLink>
                    <NavLink to={`/Product/${props.coffee}`} className="link-to" style={({isActive})=>isActive?myStyle:undefined}>PRODUCT</NavLink>
                    <NavLink to="/Service" className="link-to" style={({isActive})=>isActive?myStyle:undefined}>SERVICE</NavLink>  */}


                    
                </div>

            </nav>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/About" element={<About />}></Route>
                <Route path="/News" element={<News />}></Route>
                <Route path="/Product/:bean" element={<Product/>}></Route>
                <Route path="/Service" element={<Service />}></Route>
                <Route path="*" element={<Error/>}></Route>
                <Route path="/MyFirestore" element={<MyFirestore/>}></Route>
                <Route path="/YourFirestore" element={<YourFirestore/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default MyRouter;