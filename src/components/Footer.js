import React from 'react'


const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li><span style={{fontSize: '3em', color: '#1F1300', marginRight: '9em'}}>Let's Connect.</span></li>
                <li><a style={{fontSize: '2em', color: '#1F1300'}} href="https://twitter.com/devpotato1" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a style={{fontSize: '2em', color: '#1F1300'}} href="https://github.com/dank-lemonboi" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                <li><a style={{fontSize: '2em', color: '#1F1300'}} href="https://www.linkedin.com/in/taytlow/" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>
            <div style={{
                width: '40%',
                margin: '0 auto'
            }}>
                <form method="POST" action="https://formspree.io/nictayt.dev@gmail.com">
                    <input style={{border:'1px solid #1F1300', color: '1px solid #1F1300'}} type="email" name="email" placeholder="Your email"/>
                    <textarea style={{border:'1px solid #1F1300', color: '1px solid #1F1300', marginTop: '5px'}} name="message" placeholder="Lets work together."></textarea>
                    <button style={{border:'1px solid #1F1300', color: '1px solid #1F1300', marginTop: '1em', color: '#1F1300'}} type="submit">Send</button>
                </form>
            </div>
            <ul className="copyright">
                <li>&copy; dev-potato</li><li>Gatsby.js</li>
            </ul>
        </div>
           
    </footer>
)

export default Footer
