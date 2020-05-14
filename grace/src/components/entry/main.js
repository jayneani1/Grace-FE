import React from "react";
import Description from "./gratitudeDescription"
import CreateEntry from "./textInput"
import Header from "./header"

export default function GratitudeApplications() {
  return (
    <div className="gratitude-background">
      <Header />
      <Description />
      <CreateEntry />
      <div className="gratitude-chevron">
      </div>
    </div>
  );
}; 