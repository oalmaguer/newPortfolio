import React, { Component } from 'react';
import {ProductCard} from 'react-ui-cards';
import Weather from '../images/weathergif.gif';
import Mazatlan from '../images/mazatlan.png';
import Movie from '../images/movie.gif';
import Node from '../images/nodejs.gif';
import {AnimatedSocialIcon} from 'react-animated-social-icons';
import Bamazon from '../images/bamazon.png';

export default class Aboutpage extends Component {

    render() {
        var arrayWeather = [Weather, Mazatlan];
        var arrayMovie = [Movie];
        var node = [Node];
        var bamazon = [Bamazon];
        return(
             <div className="cards">
                 <div>
                <ProductCard photos={[
            arrayWeather[0],
            arrayWeather[1]
          ]}
          float
          productName='Weather App'
          description='Weather app I made with React and the WeatherAPI'
          buttonText='Go to the live Website'
          url='https://oalmaguer.github.io/weatherApp/'
        />
         <AnimatedSocialIcon
    brandName="github"
    url="https://github.com/oalmaguer/weatherApp"
    animation="bounce"
    defaultColor="#17bf63"
    hoverColor="white"
    width="2em"
    animationDuration={0.8}
    style={{padding: '1em', marginBottom: "40px"}}
    />
    </div>
        
       
          <div>
<ProductCard photos={[
            arrayMovie[0]
          ]}
          float
          productName='Movie App'
          description='Movie app made with Html, CSS, Javascript, Jquery and theMovieDB API'
          buttonText='Go to the live Website'
          url='https://oalmaguer.github.io/movieBook/'
        />
         
         <AnimatedSocialIcon
    brandName="github"
    url="https://github.com/oalmaguer/movieBook"
    animation="bounce"
    defaultColor="#17bf63"
    hoverColor="white"
    width="2em"
    animationDuration={0.8}
    style={{padding: '1em', marginBottom: "40px"}}
    />
        </div>
            <div>
             
<ProductCard photos={[
            node[0]
          ]}
          float
          productName='NodeJS with Spotify API'
          description='Terminal App with NodeJS to make a call to the Spotify API'
          buttonText='Go to the live Website'
          url='https://github.com/oalmaguer/liri-node-app'
        />
        <AnimatedSocialIcon
    brandName="github"
    url="https://github.com/oalmaguer/liri-node-app"
    animation="bounce"
    defaultColor="#17bf63"
    hoverColor="white"
    width="2em"
    animationDuration={0.8}
    style={{padding: '1em', marginBottom: "40px"}}
    />
            </div>
            <div>
<ProductCard photos={[
            bamazon[0]
          ]}
          float
          productName='Amazon like App'
          description='An app that checks the stock of the item you purchase and updates the new quantity.'
          buttonText='Go to the live Website'
          url='https://powerful-springs-77120.herokuapp.com/'
        />
        <AnimatedSocialIcon
    brandName="github"
    url="https://github.com/oalmaguer/bamazon"
    animation="bounce"
    defaultColor="#17bf63"
    hoverColor="white"
    width="2em"
    animationDuration={0.8}
    style={{padding: '1em', marginBottom: "40px"}}
    />
            </div>
        </div>
        )
    }

}