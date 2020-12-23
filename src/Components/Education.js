import React, {Component} from 'react';
import {Chrono} from 'react-chrono';
import {Container} from 'react-bootstrap';

const Education = () => {
    const items = [
        {
            title: "Full Stack Web Development Bootcamp (2019)",
            cardTitle: "Georgia Tech",
        },
        {
            title: "Computer Information Systems Bachelor's degree (2013 - 2018)",
            cardTitle: "Autonomous University of Sinaloa",
        },
        {
            title: "Autonomous University of Sinaloa (2016)",
            cardTitle: "Diploma in Audio and Video Editing",
        },
        {
            title: "El Paso Community College (2013)",
            cardTitle: "English Language Certification",
        },
        {
            title: "Cecati technical school in Sinaloa, Mexico (2012)",
            cardTitle: "Computer Equipment Maintenance Course",
        },
        {
            title: "Cecati technical school in Sinaloa, Mexico (2012)",
            cardTitle: "Laptop Maintenance Course",
        },
        {
            title: "Cecati technical school in Sinaloa, Mexico (2011)",
            cardTitle: "Network Oriented Problem-Solving Course",
        },
        
       
];

    return (
        <Container className="chronoContainer">
        {/* <div className="chronoText" style={{ width: "700px", height: "950px"}}> */}
            {/* <Chrono className="chrono" theme={{primary: "white", secondary: "#14a053", cardBgColor: "#111b24", cardForeColor: "white"}}  items={items} mode="VERTICAL" /> */}
            <h1>My Education</h1>
            <Chrono mode="VERTICAL_ALTERNATING" items={items} scrollable={{scrollbar: true}} hideControls="300"
             theme={{primary: "#17bf63", secondary: "white", cardBgColor: "#ecf4f3", cardForeColor: "black"}}  >
            <div className="chronoP">
                {/* //GEORGIA TECH */}
                    <p>
                    Graduated from a Full Stack Web Development Bootcamp at Georgia Tech in Atlanta, Georgia where I learned to use technologies such as Javascript, React, NodeJS, Express, MongoDB, Bootstrap, Jquery, MYSQL and PHP.
                    I got into this Bootcamp because I graduated university in Mexico and I wanted to keep improving my programming skills.
                    </p>
            </div>

            <div>
                {/* Universidad  */}
                    <p>
                   Graduated from the Autonomous University of Sinaloa in Mexico as an Information Systems Engineer, where I learned to develop a technical mind while being highly enthusiastic about technology, especially Software Engineering.
                    </p>
            </div>

                {/* Diploma audio video  */}
            <div>
                    <p>
                    Learned to use Photoshop, Premiere, Corel Draw and Audition by creating different kinds of design projects.
                    </p>
            </div>

                {/* el paso community college  */}
            <div>
                    <p>
                    Graduated from El Paso Community College with an English Language Certification where I improved my english skills (speaking, reading and writing). My native language is Spanish.
                    </p>
            </div>

            <div>
                
                {/* Mantenimiento Equipo computo  */}
                    <p>
                    Graduated from a local Technical School of a Computer Equipment Maintenance Course that taught me to solve every kind of computer hardware related issue, which nowadays still helps me when I'm building or fixing computers.
                    </p>
            </div>

            <div>
                {/* Mantenimiento Laptop */}
                    <p>
                    Graduated from a local Technical School of a Laptop Equipment Maintenance Course that taught me to solve every kind of laptop hardware related issue.
                    </p>
            </div>

            <div>
                {/* Troubleshoot redes  */}
                    <p>
                    Graduated from a local Technical School of a Network Problem Solving Course that taught me a lot of interesting things about computer networks and got me interested in keep learning more about it.
                    </p>
            </div>
            </Chrono>
        </Container>
    )

}

export default Education;