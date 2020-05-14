import React from "react";
//import Account from "../Auth/Account";
import "./home.css"

const Home = () => {
  return (
    <div className="homePageContainer">

        <div className="homePage-contentContainer">
            <p className="welcomeHook">Live with Grace </p>
            <p>Expressing gratitude has been proven to improve your outlook on life. 
               Heighten your mood by entering something you are grateful for each day. 
            </p>
        </div>
        <div className="HomePage-authContainer">
           {/* <Account/> */}
        </div>
    </div>
  );
};

export default Home;