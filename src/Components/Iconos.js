import React, { Component } from 'react';
import {AnimatedSocialIcon} from 'react-animated-social-icons';
import Resume from '../images/resume.png';
import ResumeDl from '../resume.pdf';




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
    url="https://github.com/oalmaguer"
    animation="bounce"
    defaultColor="#17bf63"
    hoverColor="white"
    width="2em"
    animationDuration={0.8}
    style={{padding: '1em', marginBottom: "40px"}}
    />
     <AnimatedSocialIcon
    brandName="linkedin"
    url="https://www.linkedin.com/in/oliveralmaguer/"
    animation="bounce"
    defaultColor="#17bf63"
    hoverColor="white"
    width="2em"
    animationDuration={0.8}
    style={{padding: '1em', marginBottom: "40px"}}
    />
    <a href={ResumeDl} target="_blank" className="resumedl"> <img src={Resume} className="resume"/></a>
    
            </div>
        )
    }
}