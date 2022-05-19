import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <nav
                class="navbar bg-light"
            >
                <div
                    class="container-fluid"
                >
                    <a
                        class="navbar-brand"
                    >
                        Navbar
                    </a>
                </div>
            </nav>
        );
    }
}

export default NavBar;