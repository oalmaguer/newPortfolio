import React, { Component } from 'react';
import ReactRoundedImage from "react-rounded-image";
import Yo from '../images/yo.jpeg';

export default class Imagen extends Component {
    render() {
        return (
            <div style={{
                        marginTop: "5vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"}}>
                <ReactRoundedImage
                image={Yo}
                roundedColor= "#17bf63"
                imageWidth="200"
                imageHeight="200"
                roundedSize="5"
                />
    
            </div>
        )
    }
}