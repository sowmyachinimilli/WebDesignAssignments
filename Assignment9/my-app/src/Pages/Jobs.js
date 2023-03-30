import React from 'react';
import Card from '../Layout/Card';
import Map from './Map';
import Navbar from '../Navbar/Navbar';
import '../App.css';


const data = [
    { id: 1, name: "Software Engineer" },
    { id: 2, name: "Java Developer" },
    { id: 3, name: "Site Reliability Engineer" },
    { id: 4, name: "Cloud Engineer" },
    { id: 5, name: "Devops Engineer" },
  ];

function Jobs() {
        return (
            <React.Fragment>
            <div>
        <Navbar/>
        <div>
            <h3>Jobs Recommended for you</h3>
        </div>
        </div>
            <div className="jobs">
            <Card color={"lightblue"} title="Software Engineer I" content="Amazon"/>
            <Card  color={"lightblue"} title="Cloud Engineer" content="Salesforce"/>
            <Card  color={"lightblue"} title="Full Stack Developer" content="Microsoft"/>
            <Card color={"lightblue"} title="Software Engineer L4" content="Netflix"/>
            </div>
            <div className="jobs">
            <Card color={"lightblue"} title="Site Reliability Engineer" content="Hubspot"/>
            <Card  color={"lightblue"} title="Software Engineer" content="Google"/>
            <Card color={"lightblue"} title="Junior Java Developer" content="TCS"/>
            <Card color={"lightblue"} title="Software Engineer" content="OpenClinica"/>
            </div>
           <br />
            <br />
            <div>List of jobs <br></br> 
            {data.map((item) => {
                return <Map id={item.id} key={item.id} name={item.name} />; })}    
            </div>
            </React.Fragment>
        )
}

export default Jobs