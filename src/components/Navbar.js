import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
    const [expandnavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false)
    }, [location]);


    
  return (
    <div className='navbar' id={expandnavbar ? "open" : "close"}>
        <h1>
            Juan 
        </h1>
        <div className='toggleButton'>
            <button onClick={() => {setExpandNavbar((prev) => !prev);
                }}
            > 
                <ReorderIcon />
            </button>
        </div>
        <div>
            <div className='links'>
                <Link to="/">About Me</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/resume">Resume</Link>
            </div>
        </div> 
    </div>
  )
}

export default Navbar
