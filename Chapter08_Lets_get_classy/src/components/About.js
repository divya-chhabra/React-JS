import React from 'react';
import { Outlet } from 'react-router-dom';
import ProfileFunctionalComponent from './Profile';
import Profile from './ProfileClass';
// const About = () => {
//   return (
//     <div>
//         <h1>About us page</h1>
//         <p>This is the live React JS course</p>
//         <ProfileFunctionalComponent name={"Akshay"}/>
//         <Profile name={"AkshayClass"} xyz="abc"/>
//     </div>
//   )
// }

class About extends React.Component{
  constructor(props){
    super(props);
    console.log("Parent - Constructor");
  }
  componentDidMount(){
    
    console.log("Parent - Component did mount");
  }
  render(){
    console.log(" Parent - Render ");
    return (
      <div>
      <h1>About us page</h1>
      <p>This is the live React JS course</p>
      <ProfileFunctionalComponent name={"Akshay"}/>
      <Profile name={"First Child"} xyz="abc"/>
      {/* <Profile name={"Second Child"} xyz="abc"/> */}
      </div>
    )
    
  }
}

export default About;