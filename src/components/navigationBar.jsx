import { Link, useLocation } from "react-router-dom";
import iconDevs from "../assets/icons/icon-devJR.png";
import iconClock from "../assets/icons/icon-clock.png"
import { useState, useEffect } from "react";


const Navigation = () => {

    const monthArray = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ];

    const DateObj = {
        day: new Date().getDate(),
        Month: new Date().getMonth(),
        Year: new Date().getFullYear(),
    }

    const [clock , setClock] = useState (
        {
            hours: new Date().getHours(),
            minutes: new Date().getMinutes(),
            Seconds: new Date().getSeconds(),
            AmPm: new Date().getHours() >= 12 ? "PM": "AM"
       
        }
    );

    useEffect(() =>{
        const  interval = setInterval(() =>{
            const dateTopicality = new Date();

            setClock({
                hours: dateTopicality.getHours(),
                minutes: dateTopicality.getMinutes(),
                Seconds: dateTopicality.getSeconds(),
                AmPm: dateTopicality.getHours() >= 12 ? "PM": "AM"

            });
        },1000);

        return () => clearInterval(interval);
    },[]);

    
   const linkActive = useLocation();



    return(
        <>
            <nav className="container-navigation">
                <div className="navigation navigation-order-1">
                    <figure className="logo-navigation">
                        <img src={iconDevs} alt="Dev JR Kevin Galvis" />
                    </figure>
                    
                    <Link to="/" className={`link-nav ${linkActive.pathname === "/"?"link-nav-active":""}`}><i className="bi bi-houses-fill"></i>Inicio</Link>
                    <Link to="/acerca" className={`link-nav ${linkActive.pathname === "/acerca" ?"link-nav-active":""}`}><i className="bi bi-person-circle"></i>Acerca De Mi</Link>
                    <Link to="/proyectos" className={`link-nav ${linkActive.pathname === "/proyectos" ?"link-nav-active":""}`}><i className="bi bi-person-circle"></i>Proyectos</Link>
                    <Link to="/contactame" className={`link-nav ${linkActive.pathname === "/contactame" ?"link-nav-active":""}`}><i className="bi bi-person-circle"></i>Contactame</Link>


                </div>

                <div className="clock-digital navigation-order-2">
                    <figure className="icon-clock">
                        <img src={iconClock} alt="Dev JR Kevin Galvis" />
                    </figure>
                    <span>{DateObj.day}</span>
                    <span>{monthArray[DateObj.Month]}</span>
                    <span>{DateObj.Year}</span>
                    <span>{clock.hours > 9 ? clock.hours:`0${clock.hours}`}</span>
                    <span>{clock.minutes > 9 ? clock.minutes:`0${clock.minutes}`}</span>
                    <span>{clock.Seconds > 9 ? clock.Seconds:`0${clock.Seconds}`}</span>
                    <span>{clock.hours > 11 ? 'PM': 'AM'}</span>
                    
                </div>
            </nav>

        
        </>
    );
}


export default Navigation;