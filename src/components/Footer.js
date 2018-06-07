import React from 'react'


const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li><span style={{fontSize: '3em', color: '#1F1300', marginRight: '9em'}}>Let's Connect</span></li>
                <li><a style={{fontSize: '2em', color: '#1F1300'}} href="https://twitter.com/devpotato1" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a style={{fontSize: '2em', color: '#1F1300'}} href="https://github.com/dank-lemonboi" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                <li><a style={{fontSize: '2em', color: '#1F1300'}} href="https://www.linkedin.com/in/taytlow/" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; dev-potato</li><li>Gatsby.js</li>
            </ul>
        </div>
    </footer>
)

export default Footer
