import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar is-transparent">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img
                            src="https://bulma.io/images/bulma-logo.png"
                            alt="Bulma: a modern CSS framework based on Flexbox"
                            width="112"
                            height="28"
                        />
                    </a>
                    <a className="navbar-item">Home</a>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a className="button is-light">Log in</a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
