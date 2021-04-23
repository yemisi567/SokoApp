import React from 'react'
import {Link} from 'react-scroll'
import '../App.css'
import { faBell, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
    return (
        <div>
            <Link to="main">
            <button type="button" class="btn" >LOGO</button>
            </Link>
         <FontAwesomeIcon icon={faUserCircle} size="2x" style={{ color: 'red' }} transform="grow-7  right-30 down-7 " />
     <FontAwesomeIcon icon={faBell} size="2x" style={{ color: 'red' }} transform="grow-7 right-50 down-7 " />

        </div>
    
    )
}
