import React from 'react'
import Link from 'gatsby-link'
import Logo from '../assets/images/NTL-badge.png'

const Header = (props) => (
    <header id={props.header} className="alt">
        <Link to="/" className="logo"><span style={{marginLeft: '.75em', fontSize: '9em', letterSpacing: '4px', fontWeight: '400'}}>Low.</span></Link>
        <nav>
            
            <ul style={{listStyle: 'none', display: 'flex'}} className="menu-link" onClick={props.onToggleMenu} href="javascript:;">
                <li style={{marginRight: '10px', fontWeight: '300px', color: '#1F1300'}}>About Me</li>
                <li style={{marginRight: '10px', fontWeight: '300px', color: '#1F1300'}}>Technology</li>
                <li style={{marginRight: '10px', fontWeight: '300px', color: '#1F1300'}}>Portfolio</li>
                <li style={{marginRight: '10px', fontWeight: '300px', color: '#1F1300'}}>Connect</li>                                                
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Header
