import React, {Component} from 'react';
import {Chrono} from 'react-chrono';
import {Container} from 'react-bootstrap';

const Experience = () => {
    const items = [
        {
            title: "Web Developer (2020)",
            cardTitle: "Soluciones Triples",
        },
        {
            title: "Freelance Web Designer / Developer (2019)",
            cardTitle: "Creativo A!",
        },
        {
            title: "Autonomous University of Sinaloa (2016 - 2018)",
            cardTitle: "Computer Technician",
        },
        {
            title: "Autonomous University of Sinaloa (2016 - 2018)",
            cardTitle: "Instructor of Induction Courses for the English Language",
        },
        
        
       
];

    return (
        <Container className="chronoContainer">
        {/* <div className="chronoText" style={{ width: "700px", height: "950px"}}> */}
            {/* <Chrono className="chrono" theme={{primary: "white", secondary: "#14a053", cardBgColor: "#111b24", cardForeColor: "white"}}  items={items} mode="VERTICAL" /> */}
            <h1>Work Experience</h1>
            <Chrono mode="VERTICAL_ALTERNATING" items={items} scrollable={{scrollbar: true}} hideControls="300"
             theme={{primary: "#17bf63", secondary: "white", cardBgColor: "#ecf4f3", cardForeColor: "black"}}  >
            <div className="chronoP">
                {/* //GEORGIA TECH */}
                    <p>
                   Web Development job maintaining and implementing new functionalities
                   to a business administration Web App using technologies such as PHP,
                   Javascript, Jquery, MySQL, HTML, CSS, MariaDB and Linux.
                    </p>
            </div>

            <div>
                {/* Creativo A!  */}
                    <p>
                    Designer and developer of Websites using Wordpress, Elementor, HTML,
CSS, Javascript and Jquery.

                    </p>
            </div>

                {/* Computer Tech  */}
            <div>
                    <p>
                    Computer technician fixing all kinds of computer related problems in the
                    center of language studies of my university.
                    </p>
            </div>

                {/* el paso community college  */}
            <div>
                    <p>
                    Responsible for teaching the induction course to young students who are
just recently starting to study english in the language center of the
Autonomous University of Sinaloa.

                    </p>
            </div>

          
            </Chrono>
        </Container>
    )

}

export default Experience;