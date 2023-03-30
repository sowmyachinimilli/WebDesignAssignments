import React from 'react';
import Navbar from '../Navbar/Navbar';
import Card from '../Layout/Card';
import './Contact.css';

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div>
    <div> 
         <Card color={"lightblue"} title="Contact" content="+1 9876543210"/>
         </div><br></br> 

        <form>
          <label for="fname">First Name</label><br></br>
          <input class="name" type="text" id="fname" name="firstname" placeholder="Your name.."/><br></br>

          <label for="lname">Last Name</label><br></br>
          <input class="name" type="text" id="lname" name="lastname" placeholder="Your last name.."/><br></br>

         <label for="country">Country</label><br></br>
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>

       
          <label for="subject">Message</label><br></br>
          <textarea> Please Enter here......</textarea><br></br>
           {/* <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"/>  */}

          <input type="submit" value="Submit"/> <br></br>
        
        </form>
    </div>
    </>
  )
}

export default Contact
