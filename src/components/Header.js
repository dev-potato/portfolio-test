import React from 'react'
import Link from 'gatsby-link'
import Logo from '../assets/images/NTL-Logo.png'

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><img style={{height: '100px', width: '100px', marginLeft: '1em'}} src={Logo} alt=""/></Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Header
