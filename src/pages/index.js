import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Banner from '../components/Banner'
import background from '../assets/images/NTL-background.png'
import '../assets/scss/iconStyles.scss'

import react from '../assets/images/icons/react.png'
import redux from '../assets/images/icons/redux.png'
import jScript from '../assets/images/icons/javascript.png'
import html from '../assets/images/icons/html.png'
import css from '../assets/images/icons/css3-plain.png'
import node from '../assets/images/icons/nodejs-original.png'
import postgresql from '../assets/images/icons/postgresql.png'
import git from '../assets/images/icons/git-original.png'
import github from '../assets/images/icons/github.png'
import graphql from '../assets/images/icons/graphql.png'
import rest from '../assets/images/icons/rest.png'
import massive from '../assets/images/icons/massive.png'
import jest from '../assets/images/icons/jest.png'
import cypress from '../assets/images/icons/cypress.png'
import DO from '../assets/images/icons/digital-ocean.png'
import nginx from '../assets/images/icons/nginx-original.png'
import sass from '../assets/images/icons/sass-original.png'
import sketch from '../assets/images/icons/sketch-logo.png'
import auth0 from '../assets/images/icons/Auth0-logo.png'
import mongo from '../assets/images/icons/mongo-logo.png'
import passport from '../assets/images/icons/passport.js-logo.png'



class HomeIndex extends React.Component {
    render() {

        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description
        const keywords = this.props.data.site.siteMetadata.keywords

        return (
            <div>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta http-quiv="Content-type" content="text/html; charset=utf-8"/>
                    <meta name="description" content={siteDescription} />
                    <meta name="keywords" content={keywords} />
                </Helmet>

                <Banner />

                <div id="main">                
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2 style={{fontWeight: '300', color: '#1F1300'}}>About Me.</h2>
                            </header>
                                <p style={{color: '#1F1300'}}>
                                    I am a coffee fueled JavaScript developer. A world traveller. A mountain lover. A lifelong learner, 
                                    and a maker. I hold creativity and lifelong learning in high regard. When I first realized what was possible 
                                    with code, I dove right in and began my journey as a developer. I work every day to explore emerging 
                                    technologies to use in the products I create. I am currently interested in machine learning and 
                                    improving my skills as a developer.
                                </p>
                                <p style={{color: '#1F1300'}}>
                                    I am currently located in the mountains of Southern Alberta, but I am legal to work anywhere in Canada, and 
                                    if the right opportunity comes along I will be happy to relocate anywhere in the world especially if there are mountains. 
                                </p>
                                <p style={{color: '#1F1300'}}>
                                    I would like to work on a team surrounded by other motivated individuals. I want to help find innovative solutions 
                                    to real world problems, and I want to do so in a consistant and maintainable way. Thank you for stopping by.
                                </p>
                            
                            {/* <ul className="actions">
                                <div>Front End Development</div>
                                <div>Back End Development</div>
                                <div></div>                                                                
                            </ul> */}
                        </div>
                        <div className='grid-parent'>
                        <header className='major'>
                            <h1 style={{fontWeight: '300', color: '#1F1300'}}>Technology.</h1>
                        </header>
                            <div id='grid-wrapper'>
                                <div className='image-container'>
                                    <img src={react}/>
                                        <span style={{color: 'black', letterSpacing: '1.5px'}}>React</span>
                                </div>
                                <div className='image-container'>
                                    <img src={redux}/>
                                        <span style={{color: 'black', letterSpacing: '1.5px'}}>Redux</span>
                                </div>
                                <div className='image-container'>
                                    <img src={jScript}/>
                                        <span style={{color: 'black', letterSpacing: '1.5px'}}>JavaScript</span>
                                </div>
                                <div className='image-container'>
                                    <img src={html}/>
                                        <span style={{color: 'black', letterSpacing: '1.5px'}}>HTML5</span>
                                </div>
                                <div className='image-container'>
                                    <img src={css}/>
                                        <span style={{color: 'black', letterSpacing: '1.5px'}}>CSS3</span>
                                </div>
                                <div className='image-container'>
                                    <img src={node}/>
                                        <span style={{color: 'black', letterSpacing: '1.5px'}}>Node.js</span>
                                </div>
                                <div className='image-container'>
                                    <img src={rest}/>
                                        <span style={{color: 'black', letterSpacing: '1.5px'}}>RESTful API</span>
                                </div>
                                <div className='image-container'>
                                    <img src={graphql}/>
                                        <span style={{color: 'black', letterSpacing: '1.5px'}}>GraphQL</span>
                                </div>
                                <div className='image-container'>
                                    <img src={massive}/>
                                        <span style={{color: 'black', letterSpacing: '1.5px'}}>Massive</span>
                                </div>
                                <div className='image-container'>
                                    <img src={postgresql}/>
                                        <span style={{color: 'black', letterSpacing: '1.5px'}}>PostgreSQL</span>
                                </div>
                                <div className='image-container'>
                                    <img src={jest}/>
                                        <span style={{color: 'black', letterSpacing: '1.5px'}}>Jest</span>
                                </div>
                                <div className='image-container'>
                                    <img src={cypress}/>
                                        <span style={{color: 'black', letterSpacing: '1.5px'}}>Cypress</span>
                                </div>
                                <div className='image-container'>
                                    <img style={{
                                        position: 'absolute',
                                        left: '-3em'
                                    }} src={git}/>
                                    <img style={{
                                        zIndex: '2',
                                        position: 'absolute',
                                        left: '40px'
                                    }} src={github}/>
                                        <span style={{color: 'black', letterSpacing: '1.5px', position: 'absolute', bottom: '0'}}>Git/Github</span>
                                </div>
                                <div className='image-container'>
                                    <img style={{
                                        position: 'absolute',
                                        top: '30%'
                                    }}
                                    src={nginx}/>
                                        <span style={{color: 'black', letterSpacing: '1.5px', position: 'absolute', bottom: '0', left: '1em'}}>NGINX</span>
                                </div>
                                <div className='image-container'>
                                    <img src={DO}/>
                                        <span style={{color: 'black', letterSpacing: '1.5px', width: '180px', position: 'absolute', bottom: '0'}}>Digital Ocean</span>
                                </div>
                                <div className='image-container'>
                                    <img src={sass}/>
                                        <span style={{color: 'black', letterSpacing: '1.5px'}}>Sass</span>
                                </div>
                                <div className='image-container'>
                                    <img style={{height: '80px'}} src={sketch}/>
                                        <span style={{color: 'black', letterSpacing: '1.5px'}}>Sketch</span>
                                </div>
                                <div className='image-container'>
                                    <img style={{height: '80px'}} src={passport}/>
                                        <span style={{color: 'black', letterSpacing: '1.5px'}}>Passport</span>
                                </div>
                                <div className='image-container'>
                                    <img style={{height: '80px'}} src={auth0}/>
                                        <span style={{color: 'black', letterSpacing: '1.5px'}}>Auth0</span>
                                </div>
                                <div className='image-container'>
                                    <img style={{height: '100px'}} src={mongo}/>
                                        {/* <span style={{color: 'black', letterSpacing: '1.5px'}}></span> */}
                                </div>
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
                keywords
            }
        }
    }
`

 {/* <ul style={{listStyle: 'none'}}>
                                    <li><img style={{marginLeft: '1em'}} src={logoTop} /></li>
                                    <li><img style={{marginLeft: '1em'}} src={logoBottom} /></li>
                                </ul> */}