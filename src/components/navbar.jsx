import React, { Component } from 'react';


const NavBar = ({ totalCounters }) => {
    <nav class="navbar bg-light">
        <a class="navbar-brand" href='#'>
            Navbar
            <span className="badge-pill badge-secondary">{totalCounters}</span>
        </a>
    </nav>

}

export default NavBar;