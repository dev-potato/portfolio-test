import React from 'react'
import Link from 'gatsby-link'
import Logo from '../assets/images/NTL-badge.png'


const Header = (props) => (
    
    <header id={props.header} className="alt">
        <Link to="/" className="logo"><span style={{marginLeft: '.75em', fontSize: '9em', letterSpacing: '4px', fontWeight: '400'}}>Low.</span></Link>
        <nav className='site-nav'>
            <ul style={{listStyle: 'none', display: 'flex'}}>
                <li onClick={ () => window.scrollTo(0, document.querySelector(".about-me").offsetTop - 180)} id='nav-link'>Me.</li>
                <li onClick={ () => window.scrollTo(0, 1200)} id='nav-link'>Technology.</li>
                <li onClick={ () => window.scrollTo(0, document.querySelector('.work-section-title').offsetTop - 100)} id='nav-link'>Portfolio.</li>
                <li onClick={ () => window.scrollTo(0, document.body.scrollHeight)} id='nav-link'>Connect.</li>                                                
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Header
