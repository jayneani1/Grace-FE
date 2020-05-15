import React from "react";
import Description from "./gratitudeDescription"
import CreateEntry from "./textInput"
import Header from "./header"
import Cards from './card'

export default function GratitudeApplications() {
  return (
    <div className="gratitude-background">
      <Header />
      <Description />
      <CreateEntry />
      <Cards />
    </div>
  );
}; 