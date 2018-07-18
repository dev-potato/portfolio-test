import React from 'react'
import Link from 'gatsby-link'
import Logo from '../assets/images/NTL-badge.png'


const Header = (props) => (
    
    <header id={props.header} className="alt">
        <Link to="/" className="logo"><span style={{marginLeft: '.75em', fontSize: '9em', letterSpacing: '4px', fontWeight: '400'}}>Low.</span></Link>
        <nav className='site-nav'>
            <ul style={{listStyle: 'none', display: 'flex'}}>
                <li onClick={ () => window.scrollTo(0, 560)} style={{marginRight: '10px', fontWeight: '300px', color: '#EEE5E9'}}>Me.</li>
                <li onClick={ () => window.scrollTo(0, 990)} style={{marginRight: '10px', fontWeight: '300px', color: '#EEE5E9'}}>Technology.</li>
                <li onClick={ () => window.scrollTo(0, 1940)} style={{marginRight: '10px', fontWeight: '300px', color: '#EEE5E9'}}>Portfolio.</li>
                <li onClick={ () => window.scrollTo(0, 3000)} style={{marginRight: '10px', fontWeight: '300px', color: '#EEE5E9'}}>Connect.</li>                                                
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Header
