import React, { Component } from 'react';
import ReactRoundedImage from "react-rounded-image";
import Yo from '../images/yobien.jpg';

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
                imageWidth="250"
                imageHeight="250"
                roundedSize="5"
                />
    
            </div>
        )
    }
}