import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Banner from '../components/Banner'
import background from '../assets/images/NTL-background.png'
import logoTop from '../assets/images/logo-top.png'
import logoBottom from '../assets/images/logo-bottom.png'


class HomeIndex extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        return (
            <div>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <Banner />

                <div id="main">                
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2 style={{fontWeight: '300', color: '#1F1300'}}>About me.</h2>
                            </header>
                            <p style={{color: '#1F1300'}}>I'm a coffee fueled JavaScript developer. A world Traveller. A mountain lover. A lifelong learner, and a maker. I hold creating and learning in high regard and when i started to realize what was possible with code, I dove right in and began my journey as a developer.</p>
                            <p style={{color: '#1F1300'}}>I'm currently situated in the mountains of Utah, but will be relocating to the Canadian rockies shortly, and If the right opportunity came along I would be happy to relocate to pretty much anywhere in the world. Especially if there are mountains. </p>
                            <p style={{color: '#1F1300'}}>I would like to work on a team surrounded by motivated individuals. I want to help find innovative solutions to real world problems, and i want to do so in a consistant and maintainable way. Thank you for stopping by.</p>
                            
                            <ul className="actions">

                                {/* <li><Link to="/landing" className="button next">Get Started</Link></li> */}
                            </ul>
                        </div>
                        <div className='inner'>
                        <header className='major'>
                            <h1 style={{fontWeight: '300', color: '#1F1300'}}>Technology.</h1>
                        </header>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <ul style={{listStyle: 'none'}}>
                                    <li><img src={logoTop} /></li>
                                    <li><img src={logoBottom} /></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
               

            </div>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`

 