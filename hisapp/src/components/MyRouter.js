import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import News from "./News"
import Product from "./Product"
import Service from "./Service"
import logo from "../images/coffee/coffee01.jpg"
import Header from "./Header"

const MyRouter=(props)=>{
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
                </div>

            </nav>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/About" element={<About />}></Route>
                <Route path="/News" element={<News />}></Route>
                <Route path="/Product/:bean" element={<Product/>}></Route>
                <Route path="/Service" element={<Service />}></Route>
    
            </Routes>
        </BrowserRouter>
    )
}
export default MyRouter;