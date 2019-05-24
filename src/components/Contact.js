import React from 'react'
import personal from '../assets/images/personal_project_picture.jpeg'
import group from '../assets/images/group_project.png'
import enso from '../assets/images/enso.png';
import paysafe from '../assets/images/paysafe-logo.png';

import '../assets/scss/projectStyle.scss'


class Contact extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            mobile: false
        }
    }
    render() {
        return(
        <section id="contact">
            <div className='work-section-title'>My Work.</div>
    
             <div className='project-card-wrapper'>
              <div className='project-card-description'>
    
                    <span className='project-card-title'>Only<span style={{color: 'red'}}>/</span>Once (E-Commerce Clone)</span><br />
    
                    <span>This was my first project. My main focus here was to re-create a fully functioning 
                    E-Commerce website with a pleasant user experience. I wanted to create the UX features 
                    on my own using only React and CSS3 on my front end, built with a Node.js and 
                    postgreSQL backend.</span><br/>
                    <span> You can visit the site <a href="http://clone-once.com/#/"><span>HERE</span></a><br/>
                        Or checkout the GitHub repo <a href="https://github.com/dank-lemonboi/only-once-clone"><span>HERE</span></a>
                        </span>
                </div>
                    <div className='image-wrapper'>
                        <img src={personal} alt="Personal Project (E-Commerce)" />
                    </div>
    
                </div>

            <div className='project-card-wrapper'>
            <div className='project-card-description'>
                <span className='project-card-title'>Food-Connect</span><br />
                    
                    <span>The objective of this Application is to help reduce food waste.
                        Our goal is to provide a simple and effective platform for small
                        business-owners to easily give their would be waste to pantries
                        and soup kitchens. Our aim is to provide Tax Documents so the
                        businesses can receive a charitable donation tax deduction,
                        and we provide analytics so the people using the App can see how
                        much food they have saved from the landfill and their accumulated
                        tax savings.</span><br/>
                        <span> You can visit the site <a href="https://food-connect.net/#/"><span>HERE</span></a><br/>
                        Or checkout the GitHub repo <a href="https://github.com/ScottWorks/Food-Connect"><span>HERE</span></a>
                        </span>
                </div>
                <div className='image-wrapper'>
                 <img src={group} alt="Group Project" />
             </div>
            </div>

            <div className='project-card-wrapper'>
            <div className='project-card-description'>
                <span className='project-card-title'>Enso Digital</span><br />
                    
                    <span>I had been communicating with the owners and designers at enso for months
                        because I was so impressed with their design and UX, so when they approached
                        me with a contratc to re-create their website I jumped on board as quickly as possible.
                        It was my second remote contrat, and the first I took on while working balancing a
                        full-time job as well.</span><br/>
                        <span> You can visit the site <a href="https://enso.digital"><span>HERE</span></a><br/>
                        </span>
                </div>
                <div className='image-wrapper scale'>
                 <img src={enso} alt="Group Project" />
               </div>
               
            </div>

            <div className='project-card-wrapper'>
            <div className='project-card-description'>
                <span className='project-card-title'>Paysafe Group</span><br />
                    
                    <span>This has been my first full-time role as a developer.
                        Working in a large office, with many teams working on different
                        projects in parallel has been a positive fast-paced learning experience.
                        I have been mainly involved with the frontend maintanence of the NETELLER
                        digital wallet. And more recenlty have been involved in developing
                        new applications for both SKRILL and NETELLER digital wallets.</span><br/>
                        <span> You can visit the site <a href="https://www.paysafe.com/na-en/"><span>HERE</span></a><br/>
                        </span>
                </div>
                <div className='image-wrapper scale'>
                 <img src={paysafe} alt="Paysafe" />
               </div>
               
            </div>
        </section>

        )
    }
} 


export default Contact
