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
                                <p style={{color: '#1F1300'}}>
                                    I am a coffee fueled JavaScript developer. A world traveller. A mountain lover. A lifelong learner, 
                                    and a maker. I hold creativity and lifelong learning in high regard. When I first realized what was possible 
                                    with code, I dove right in and began my journey as a developer. I work every day to explore emerging 
                                    technologies to use in the products I create. I am currently interested in machine learning and 
                                    improving my skills as a developer.
                                </p>
                                <p style={{color: '#1F1300'}}>
                                    I am currently located in the mountains of Utah, but will be relocating to the Canadian rockies shortly. 
                                    If the right opportunity comes along I will be happy to relocate anywhere in the world especially if there are mountains. 
                                </p>
                                <p style={{color: '#1F1300'}}>
                                    I would like to work on a team surrounded by other motivated individuals. I want to help find innovative solutions 
                                    to real world problems, and I want to do so in a consistant and maintainable way. Thank you for stopping by.
                                </p>
                            
                            <ul className="actions">
                                <div>Front End Development</div>
                                <div>Back End Development</div>
                                <div></div>                                                                
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

 