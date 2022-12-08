import React from 'react';
import { Link } from "react-router-dom"
// import "../css/"
// import {} from "../"

export default function Header() {
    return(
        <>
            Header
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </>
    )
}