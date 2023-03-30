import React from 'react';
import Navbar from '../Navbar/Navbar';
import Card from '../Layout/Card';

const About = () => {
  return (
    <>
    <Navbar/>
        <div>
            <h1>About Us</h1>
            <h3>We help you get hired</h3>
            <p>We’ve helped over 100,000 people land their dream jobs. Let our job search strategies take you from resumes to better days.</p>
        </div>
        <br/><br/>
        <div>
            <h2>Meet Our Team</h2>
        </div>
        <div className='team'>
            <Card color={"lightblue"} title="Jon McInerney" content="CEO"/>
            <br/>
            <Card color={"lightblue"} title="Alice" content="COO"/>
            <br/>
            <Card color={"lightblue"} title="Bob" content="CTO"/>
            <br/>
            <Card color={"lightblue"} title="Charles" content="Senior Director of Infrastructure"/>
        </div>
    </>
  )
}

export default About
