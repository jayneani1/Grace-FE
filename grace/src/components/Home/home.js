import React from "react";
//import Account from "../Auth/Account";
import Header from '../entry/header'
import "./home.css"
import Main from "../entry/main"
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = () => {
  return (
    <Router>
    <div className="homePageContainer" style={{color: "#E1D8CE",
  paddingBottom: "100px"}}>
        
        <div className="homePage-contentContainer" style={{
    marginTop: '50px',
    margin: '2% auto',
    color: "#E1D8CE",
    alignItems: "center"}}>
       <a href="/main"><img className="enterImage" style={{margin: "1% auto",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "60px",
      paddingRight: "10px"}} src="https://res.cloudinary.com/dnxx8igwb/image/upload/v1589479717/imageedit_3_8065322209_i3edqx.png" alt="enter"></img></a>
      <Route path="/main" cmponent={Main}/>
    </div>
    </div>
    </Router>
  );
};

export default Home;