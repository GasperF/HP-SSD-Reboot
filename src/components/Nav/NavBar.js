import React, {Component} from 'react'
import './NavBar.css'
import MenuItems from './MenuItems'

class NavBar extends Component {

    state = { clicked: false }
    
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className='navBar__items'>
                <div className='navBar__logo'>
                    <img className='hvr-bounce-in' src="/img/logo.png" alt="logo" />
                    <h1>HP Shiny Smiles Dentistry</h1>
                </div>
                <div className="menu__item" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-tooth hvr-wobble-skew' : 'fas fa-teeth hvr-wobble-skew'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav__menu active' : 'nav__menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}><a className={item.cName} href={item.url}>{item.title}</a></li>

                        )
                    })}
                </ul>
            </nav>
        )
    }
};

export default NavBar
