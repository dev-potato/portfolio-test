import React from 'react'
import personal from '../assets/images/personal_project_picture.jpeg'
import group from '../assets/images/group_project.png'

import '../assets/scss/projectStyle.scss'


const width = window.innerWidth
class Contact extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            mobile: false
        }
    }
    
    componentWillMount() {
        console.log({width})
        
        if(width < 600){
            this.setState({
                mobile: !this.state.mobile
            })
        }
        console.log(this.state.mobile)
    }
    render() {
        return(
        <section id="contact">
            <span className='work-section-title'>My Work.</span>
    
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
        </section>

        )
    }
} 


export default Contact
