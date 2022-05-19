import React, { Component } from 'react';


const NavBar = ({ totalCounters }) => {
    <nav
        class="navbar bg-light"
    >
        <div
            class="container-fluid"
        >
            <a
                class="navbar-brand"
                href="#"
            >
                Navbar <span className="badge-pill badge-secondary">{totalCounters}</span>
            </a>
        </div>
    </nav>

}

export default NavBar;