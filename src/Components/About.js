import React, { Component } from 'react';
import {ProductCard} from 'react-ui-cards';
import Weather from '../images/weathergif.gif';
import Mazatlan from '../images/mazatlan.png';
import Movie from '../images/movie.gif';
import Node from '../images/nodejs.gif';
import {AnimatedSocialIcon} from 'react-animated-social-icons';
import Bamazon from '../images/bamazon.png';
import Creativoa from '../images/creativoa.png';
import Limpiatudepa from '../images/limpiatudepa.png';
import Tours from '../images/toursen.png';
import Video from '../images/desktop.webm';
import Webscrape from '../images/Webscrape.mp4';

export default class About extends Component {

    render() {
        var arrayWeather = [Weather, Mazatlan];
        var arrayMovie = [Movie];
        var node = [Node];
        var bamazon = [Bamazon];
        var creativoa = [Creativoa];
        var tours = [Tours];
        var limpiatudepa = [Limpiatudepa];
        
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
            creativoa[0]
          ]}
          float
          productName='Creativo A!'
          description='A Website for a web design company.'
          buttonText='Go to the live Website'
          url='https://creativoa.com/'
        />
       
            </div>
            <br />
             <div>
<ProductCard photos={[
            tours[0]
          ]}
          float
          productName='Tours en Mazatlan'
          description='A website for a tourism company.'
          buttonText='Go to the live Website'
          url='https://toursenmazatlan.com'
        />
       
            </div>


            <div>
<ProductCard photos={[
            limpiatudepa[0]
          ]}
          float
          productName='Limpia tu Depa'
          description='A practice website I made with Wordpress, Elementor and code.'
          buttonText='Go to the live Website'
          url='https://limpiatudepa.com'
          style={{paddingBottom: "40px"}}

        />
       
            </div>

             <div>
<ProductCard photos={[
            bamazon[0]
          ]}
          float
          productName='Amazon App'
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

            <div className="videos" style={{width: "100%"}}>
              <h1 style={{color: "white"}}>News Saver with Mediastack API</h1>
              <p>Save your favorite news in your local storage!</p>
              <p>Unfortunately, you have to pay for the API to work with HTTPS calls so I cannot use it 
                in production, but here's an example.
              </p>
              
              <video src={Video} width="50%" className="videowidth"  controls="controls" autoplay="true" />
              <br />
              <div>
               <AnimatedSocialIcon
    brandName="github"
    url="https://github.com/oalmaguer/news"
    animation="bounce"
    defaultColor="#17bf63"
    hoverColor="white"
    width="2em"
    animationDuration={0.8}
    style={{padding: '2em', marginBottom: "40px"}}
    /></div>

          <h1 style={{color: "white", marginTop: "20px"}}>Web Scrapper with Puppeteer</h1>
              <p>Scrapes the latest gaming news from 2 websites with Javascript, React, NodeJs and Puppeteer</p>
              <p>First you click on the Website you want to scrape, levelup.com or atomix.vg, then it opens a chromium browser
                and starts scraping the latest news, you can see the text on the console too.
                After that it displays the author, the date and the text content of the news on the Frontend
              </p>
              <p>The loading times when deploying to Heroku are too long even disabling css and images so I prefer to show it on video.
              </p>
              
              <video src={Webscrape} width="50%" className="videowidth" controls="controls" autoplay="true" />
              <br />
               <AnimatedSocialIcon
    brandName="github"
    url="https://github.com/oalmaguer/newscraper3"
    animation="bounce"
    defaultColor="#17bf63"
    hoverColor="white"
    width="2em"
    animationDuration={0.8}
    style={{padding: '2em', marginBottom: "40px"}}
    />


            </div>
        </div>
        )
    }

}