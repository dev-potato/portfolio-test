import React from 'react'
import Link from 'gatsby-link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landing">About Me</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/generic">Projects</Link></li>
                {/*<li><Link onClick={props.onToggleMenu} to="/elements">Contact</Link></li>*/}
            </ul>
            <ul className="actions vertical">
                <li><a href="#" className="button special fit">Wanna chat?</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Menu
