import React from 'react'
import './About.css'
import Card from '../Card/Card'
function About() {
  return (
    <div id="about">
        <div className="leftabout">
            <div className="circle-line">
                <div className="circle"></div>
                <div className="line"></div>
                <div className="circle"></div>
                <div className="line"></div>
                <div className="circle"></div>
            </div>
            <div className="aboutdetails">
                <div className="personalinfo">
                    <h1>PERSONAL INFO</h1>
                    <ul>
                        <li>
                            <span>Name : </span>Ashwini Marathe
                        </li>
                        <li>
                            <span>Degree : </span>Bachelor Of Engineering
                        </li>
                        <li>
                            <span>Branch : </span>Computer Science
                        </li>
                        <li>
                            <span>CGPA : </span>9.26
                        </li>
                    </ul>
                </div>
                
                <div className="experience">
                    <h1>Experince</h1>
                    <ul>
                        <li>
                            Winter Intern at Infosys Ltd (Dec 2022 - Jan 2023)
                        </li>
                        <li>
                            Associate Developer Trainee at Cogitate Technology Solution ( Present)
                        </li>
                        
                        
                    </ul>
                </div>
                <div className="skills">
                    <h1>SKILLS</h1>
                    <ul>
                        <li>
                            Web Technologies (Java, HTML, CSS, JavaScript,MERN Stack , SpringBoot)
                        </li>
                        <li>
                            REST API, Docker ,Postman, MYSQL ,PostgreSQL.
                        </li>
                        <li>
                            DSA AND PROBLEM SOLVING
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
        <div className="rightabout">
            <div className="cards-wrapper">
                <Card title="Java" body="Experienced with Java, Spring and Spring Boot for backend development." />
                <Card title="DSA" body="Strong problem solving with data structures & algorithms; competitive programming practice." />
                <Card title="MERN Stack" body="Full-stack development with MongoDB, Express, React and Node.js." />
            </div>
        </div>
    </div>
  )
}

export default About
