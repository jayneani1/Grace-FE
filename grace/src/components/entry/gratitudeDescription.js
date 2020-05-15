import React from "react";
import { useMediaQuery } from "react-responsive"
import './gratitude.css'

export default function Description() {
  const isMobile = useMediaQuery({query: "(max-width:768px)"}) 
  return (
    <>
      {
        isMobile ?
          (
            <div className="gratDescription" style={{marginTop: '40px', marginBottom: "7%"}}>
                <h3 className="gratitude-description">Sometimes it's the little things</h3>
            </div>
          ) : 
          (
            <div>
              <h3 className="gratitude-description" style={{margin: "40px"}}>Sometimes it's the little things</h3>
            </div>
          )
      }
    </>
  )
}