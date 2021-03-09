import React, { Component } from 'react';
import './header.css'
import Group from '../images/Group.svg';

class Header extends Component {
    render() {
        return (
            <header>
                <div>
                    <h1>RECARREGUE E GANHE <br/> <b>ATÉ 3 GB DE BÔNUS</b></h1>

                    <div>
                        <button className="header">R$ 15</button>
                        <button className="header">R$ 20</button>
                    </div>

                    <div>
                        <button className="header">R$ 30</button>
                        <button className="header">R$ 25</button>
                    </div>

                    <div>
                    <button className="header">OUTRO VALOR</button>
                    </div>
                </div>


                <div className="imagem">
                    <img src={Group}></img>
                </div>
            </header>
        )
    }
}

export default Header;