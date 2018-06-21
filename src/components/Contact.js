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
                    <span style={{textDecoration: 'underline'}}>Only / Once (E-Commerce Clone)</span><br/>
                    <span><a href="https://github.com/dank-lemonboi/only-once-clone"></a>https://github.com/dank-lemonboi/only-once-clone</span>
                    </div>
                <a href="http://clone-once.com/#/">
                    <img style={{
                        height: '16em',
                        marginLeft: '30%'
                    }} src={personal} alt="Personal Project (E-Commerce)"/></a>
                </div>
                <div>
                   <a href="https://food-connect.net/#/"> <img style={{
                        height: '14em',
                        marginLeft: '-18em'
                    }}
                    src={group} alt="Group Project"/></a>
                   <div style={{ 
                       color: '#1F1300',
                       marginLeft: '-2em',
                }}><span 
                style={{
                    textDecoration: 'underline'
                    }}>Food-Connect</span><br/>
                    <span>https://github.com/ScottWorks/Food-Connect</span><br/><br/>
                </div>
                </div>
    </section>
)

export default Contact
