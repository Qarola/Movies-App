import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../img/film-roll-white.png';

import './NavBar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <div>
                <img id="logo" src={Logo} width="85" height="60" className="d-inline-block align-top" alt="" />
            Movies App
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/" >Home</NavLink>
                        <NavLink to="/favs" >Favorites</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}