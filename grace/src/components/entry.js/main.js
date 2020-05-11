import React from "react";
import GratitudeForm from "./textInput"
import Description from "./gratitudeDescription"

export default function GratitudeApplications() {
  return (
    <div className="gratitude-background">
      <Description />
      <div className="gratitude-chevron">
        <GratitudeForm />
      </div>
    </div>
  );
};