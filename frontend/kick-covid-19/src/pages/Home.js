import React from "react";
import Card from "../components/Card";
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import "./style.css";

function Home() {
  return (
    <div className="Twitter">
    <div className="Spencer">
      <Card />  
    </div>
    <div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="CDCgov"
        options={{height: 400}}
      />
    </div>
    </div>
  );
}
export default Home;
