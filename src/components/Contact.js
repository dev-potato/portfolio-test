import React from 'react'
import personal from '../assets/images/personal_project_picture.jpeg'
import group from '../assets/images/group_project.png'

const Contact = (props) => (
    <section id="contact">
        <span style={{
            color: '#1F1300',
            fontSize: '36px',
            margin: '3em'
        }}>My Work.</span>
                <div style={{
                    width: '100vw',
                    
                }}>
                <span style={{color: '#1F1300', width: '100%', fontSize: '15px'}}>Only / Once (E-Commerce Clone)</span>
                <a href="http://clone-once.com/#/">
                    <img style={{
                        height: '16em'
                    }} src={personal} alt="Personal Project (E-Commerce)"/></a>
                </div>
                   <a href="https://food-connect.net/#/"> <img style={{
                        marginLeft: '3em',
                        height: '14em'
                    }}
                    src={group} alt="Group Project"/></a>
                   <span style={{color: '#1F1300'}}>Food-Connect</span>
    </section>
)

export default Contact
