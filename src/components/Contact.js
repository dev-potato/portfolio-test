import React from 'react'
import personal from '../assets/images/personal_project_picture.jpeg'
import group from '../assets/images/group_project.png'

const Contact = (props) => (
    <section id="contact">
        <span style={{
            color: '#1F1300',
            fontSize: '36px',
            margin: '3em',
            marginLeft: '45%',
        }}>My Work.</span>
                <div style={{
                    width: '100vw',
                    
                }}>
                <div style={{
                    position: 'absolute',
                    left: '-18em',
                    color: '#1F1300', 
                    width: '100%', 
                    fontSize: '15px',
                    marginTop: '1em'
                    }}>
                    <span style={{textDecoration: 'underline'}}>Only / Once (E-Commerce Clone)</span>
                    </div>
                <a href="http://clone-once.com/#/">
                    <img style={{
                        height: '16em',
                        marginLeft: '30%'
                    }} src={personal} alt="Personal Project (E-Commerce)"/></a>
                </div>
                   <a href="https://food-connect.net/#/"> <img style={{
                        marginLeft: '3em',
                        height: '14em'
                    }}
                    src={group} alt="Group Project"/></a>
                   <span style={{ 
                       color: '#1F1300',
                       position: 'absolute',
                       left: '25em',
                       textDecoration: 'underline',
                       marginTop: '1em'
                }}>Food-Connect</span>
    </section>
)

export default Contact
