import React, { Component } from 'react';
import Gmail from '../images/gmail.png';


export default class ContactPage extends Component {
    render() {
        return (
            <div style={{
                        marginTop: "10vh",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white"}}>
                            <h1>Let's get in touch</h1>
            
            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=almaguero95@gmail.com" target="_blank"> almaguero95@gmail.com
             
             <br />
            <img src={Gmail} style={{
                width: "30px",
                marginTop: "25px"
            }} />
            </a>
            <br />
                
            </div>
            
        )
    }
}