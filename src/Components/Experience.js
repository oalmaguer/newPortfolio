import React, {Component} from 'react';
import {Chrono} from 'react-chrono';
import {Container} from 'react-bootstrap';

const Experience = () => {
//     const items = [
//         {
           
//             cardTitle: "Soluciones Triples",
//         },
//         {
            
//             cardTitle: "Creativo A!",
//         },
//         {
//             cardTitle: "Center of Language Studies of UAS",
//         },
//         {
//             cardTitle: "Autonomous University of Sinaloa",
//         },
        
        
       
// ];

    return (
        <Container className="chronoContainer" style={{padding: "20px"}}>
        {/* <div className="chronoText" style={{ width: "700px", height: "950px"}}> */}
            {/* <Chrono className="chrono" theme={{primary: "white", secondary: "#14a053", cardBgColor: "#111b24", cardForeColor: "white"}}  items={items} mode="VERTICAL" /> */}
            <h1>Work Experience</h1>
            <Chrono  mode="VERTICAL" scrollable={{scrollbar: true}} hideControls="300"
             theme={{primary: "#17bf63", secondary: "white", cardBgColor: "#ecf4f3", cardForeColor: "black"}}  >
            <div className="chronoP">
                {/* //GEORGIA TECH */}
                <h3 className="tlTitle">Soluciones Triples</h3>
                <h4 className="tlSubtitle">Web Developer (2020)</h4>
                    <p >
                   Web Development job maintaining and implementing new functionalities
                   to a business administration Web App using technologies such as PHP,
                   Javascript, Jquery, MySQL, HTML, CSS, MariaDB and Linux.
                    </p>
            </div>

            <div className="chronoP">
                {/* Creativo A!  */}
                <h3 className="tlTitle">Creativo A!</h3>
                <h4 className="tlSubtitle">Freelance Web Designer / Developer (2019)</h4>
                    <p >
                    Designer and developer of Websites using Wordpress, Elementor, HTML,
                    CSS, Javascript and Jquery.

                    </p>
            </div>

                {/* Computer Tech  */}
            <div>
                <h3 className="tlTitle">Autonomous University of Sinaloa</h3>
                <h4 className="tlSubtitle">Computer Technician (2016 - 2018)</h4>
                    <p>
                    Computer technician fixing all kinds of computer related problems in the
                    center of language studies of my university.
                    </p>
            </div>

                {/* el paso community college  */}
            <div>
                <h3 className="tlTitle">Center of Language Studies of UAS</h3>
                <h4 className="tlSubtitle">Instructor of Induction Courses for the English Language (2016 - 2018)</h4>
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