import React from 'react';
import Card from '../Layout/Card';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  return (
    <>
    <Navbar/>
    <div>
        <h1>Get Started!</h1>
        <h2>CAREER COACHING TO PROPEL YOUR CAREER</h2>
    </div>
    <h4>Our Client now work at .. </h4>
    <div className='clients'>
        <Card className='client-card' color={"white"} title={"Amazon"}/>
        <Card color={"white"} title={"LinkedIn"}/>
        <Card color={"white"} title={"Microsoft"}/>
        <Card color={"white"} title={"Facebook"}/>
        <Card color={"white"} title={"Netflix"}/>
        <Card color={"white"} title={"Tesla"}/>
        <Card color={"white"} title={"Google"}/>
    </div>
    <div>
        <h3>How it Works?</h3>
        <p>1. Get your foundation</p>
        <p>2. Get your interviews</p>
        <p>3. Get the job offer</p>
    </div>
    </>
  )
}

export default Home
