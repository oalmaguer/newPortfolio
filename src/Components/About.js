import React, { Component } from 'react';
import {ProductCard} from 'react-ui-cards';
import Weather from '../images/weathergif.gif';
import Mazatlan from '../images/mazatlan.png';
import Movie from '../images/movie.gif';
import Node from '../images/nodejs.gif';

export default class Aboutpage extends Component {

    render() {
        var arrayWeather = [Weather, Mazatlan];
        var arrayMovie = [Movie];
        var node = [Node];
        return(
             <div className="cards">
                <ProductCard photos={[
            arrayWeather[0],
            arrayWeather[1]
          ]}
          float
          productName='Weather App'
          description='Weather app I made with React'
          buttonText='Go to the live Website'
          url='https://oalmaguer.github.io/weatherApp/'
        />

<ProductCard photos={[
            arrayMovie[0]
          ]}
          float
          productName='Movie App'
          description='Movie app made with Html, CSS, Javascript, Jquery and theMovieDB API'
          buttonText='Go to the live Website'
          url='https://oalmaguer.github.io/movieBook/'
        />

<ProductCard photos={[
            node[0]
          ]}
          float
          productName='Node with Spotify API'
          description='Terminal App to make a call to the Spotify API via a command in the terminal'
          buttonText='Go to the live Website'
          url='https://github.com/oalmaguer/liri-node-app'
        />

        </div>
        )
    }

}