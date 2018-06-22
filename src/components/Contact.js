import React from 'react'
import personal from '../assets/images/personal_project_picture.jpeg'
import group from '../assets/images/group_project.png'

const Contact = () => (
    <section id="contact">
        <span style={{
            color: '#1F1300',
            fontSize: '36px',
            margin: '3em',
            marginLeft: '45%',
        }}>My Work.</span>

         <div style={{
            width: '100%',
            display: 'flex',
            boxSizing: 'border-box',
            overflow: 'none'
        }}>
          <div style={{
                color: '#1F1300',
                width: '70%',
                padding: '0',
                marginLeft: '-24em'
                // marginLeft: '-10em',
                // marginTop: '3em',
                // paddingRight: '10px',
            }}>

                <span style={{ 
                    textDecoration: 'underline',
                    fontSize: '24px',
                    color: '#1F1300' }}>Only<span style={{color: 'red'}}>/</span>Once (E-Commerce Clone)</span><br />

                <span style={{
                    width: '600px',
                    color: '#1F1300'
                }}>This was my first project. My main focus here was to re-create a fully funcioning 
                E-Commerce website with a pleasant user experience. I wanted to create the UX features 
                on my own using only React and CSS3 on my front end, built with a Node.js and 
                postgreSQL backend.</span><br/>
                <span> You can visit the site <a href="http://clone-once.com/#/"><span>HERE</span></a><br/>
                    Or checkout the GitHub repo <a href="https://github.com/dank-lemonboi/only-once-clone"><span>HERE</span></a>
                    </span>
            </div>

            <div
                style={{
                    width: '50%',
                    marginLeft: '-13.5em'
                }}
            >
                <img style={{
                    height: '16em',
                   paddingBottom: '2em'
                }} src={personal} alt="Personal Project (E-Commerce)" />
            </div>
            </div>
        <div style={{
            width: '100%',
            display: 'flex',
            boxSizing: 'border-box',
            overflow: 'none'
        }}>
        <div style={{
                color: '#1F1300',
                width: '70%',
                padding: '0',
                marginLeft: '-24em'
                // marginLeft: '-10em',
                // marginTop: '3em',
                // paddingRight: '10px',
            }}>
            <span
                style={{
                    textDecoration: 'underline',
                    fontSize: '24px',
                    color: '#1F1300'
                }}>Food-Connect</span><br />
                
                <span style={{
                    width: '600px',
                    color: '#1F1300'
                }}>The objective of this Application is to help reduce food waste.
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
            <div
                style={{
                    width: '50%',
                    marginLeft: '-16em'
                }}
            >
             <img style={{
                height: '20em',
                paddingBottom: '2em'
            }}
                src={group} alt="Group Project" />
         </div>
        </div>
    </section>
)

export default Contact
