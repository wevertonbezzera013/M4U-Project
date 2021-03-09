import React, { Component } from 'react';
import './navbar.css'

class NavBar extends Component {
    render() {
        return (
            <navbar>
                <button className="nav">HOME</button>
                <button className="nav">RECARGA</button>
                <button className="nav">E-CHIP</button>
                <button className="nav">QUEM SOMOS</button>
                <button className="nav">CONTATO</button>
            </navbar>
        )
    }
}

export default NavBar;