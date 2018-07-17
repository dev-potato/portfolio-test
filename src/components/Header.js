import React from 'react'
import Link from 'gatsby-link'
import Logo from '../assets/images/NTL-badge.png'

const pageHeight = window.innerHeight;

let me = pageHeight * 0.93;
let tech = pageHeight * 1.58;
let port = pageHeight * 3.099;
let con = pageHeight * 5;

const Header = (props) => (
    
    <header id={props.header} className="alt">
        <Link to="/" className="logo"><span style={{marginLeft: '.75em', fontSize: '9em', letterSpacing: '4px', fontWeight: '400'}}>Low.</span></Link>
        <nav className='site-nav'>
            <ul style={{listStyle: 'none', display: 'flex'}}>
                <li onClick={ () => window.scrollTo(0, me)} style={{marginRight: '10px', fontWeight: '300px', color: '#EEE5E9'}}>Me.</li>
                <li onClick={ () => window.scrollTo(0, tech)} style={{marginRight: '10px', fontWeight: '300px', color: '#EEE5E9'}}>Technology.</li>
                <li onClick={ () => window.scrollTo(0, port)} style={{marginRight: '10px', fontWeight: '300px', color: '#EEE5E9'}}>Portfolio.</li>
                <li onClick={ () => window.scrollTo(0, con)} style={{marginRight: '10px', fontWeight: '300px', color: '#EEE5E9'}}>Connect.</li>                                                
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Header
