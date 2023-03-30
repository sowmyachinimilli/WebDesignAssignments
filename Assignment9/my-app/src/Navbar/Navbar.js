import React from "react";
import {Link} from 'react-router-dom';
import './Navbar.css';
import Footer from "../Pages/Footer";

export default function Navbar(){
    return(
        <div>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/jobs">Jobs</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <Footer/>
        </div>
    )
}