import React, { Component } from 'react';
import {AnimatedSocialIcon} from 'react-animated-social-icons'


export default class Iconos extends Component {
    render() {
        return (
            <div style={{
                        marginTop: "2vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"}}>
               <AnimatedSocialIcon
    brandName="github"
    url="https://github.com/meko-deng/react-animated-social-icons"
    animation="bounce"
    defaultColor="#17bf63"
    hoverColor="white"
    width="2em"
    animationDuration={0.8}
    style={{padding: '1em', marginBottom: "40px"}}
    />
     <AnimatedSocialIcon
    brandName="linkedin"
    url="https://github.com/meko-deng/react-animated-social-icons"
    animation="bounce"
    defaultColor="#17bf63"
    hoverColor="white"
    width="2em"
    animationDuration={0.8}
    style={{padding: '1em', marginBottom: "40px"}}
    />
     <AnimatedSocialIcon
    brandName="facebook"
    url="https://github.com/meko-deng/react-animated-social-icons"
    animation="bounce"
    defaultColor="#17bf63"
    hoverColor="white"
    width="2em"
    animationDuration={0.8}
    style={{padding: '1em', marginBottom: "40px"}}
    />
    
            </div>
        )
    }
}