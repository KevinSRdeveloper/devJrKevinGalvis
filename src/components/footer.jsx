import '../css/main.css';
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import iconDevs from "../assets/icons/icon-devJR.png";

const PageFooter = () => {
    const linkActive = useLocation();

    return(
    <>

        <footer className="container-footer">
            <figure className='logo-footer'>
                <img src={iconDevs} alt="Dev JR Kevin Galvis" />
            </figure>
        </footer>
    
    
    </>

    )
   
}

export default PageFooter