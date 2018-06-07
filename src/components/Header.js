import React from 'react'
import Link from 'gatsby-link'
import Logo from '../assets/images/NTL-badge.png'

const Header = (props) => (
    <header id={props.header} className="alt">
        <Link to="/" className="logo"><span style={{marginLeft: '.75em', fontSize: '9em', letterSpacing: '4px', fontWeight: '400'}}>Low.</span></Link>
        <nav>
            
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Header
