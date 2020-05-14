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
            <div style={{marginTop: '40px', marginBottom: "7%"}}>
                <h3 className="gratitude-description">Sometimes it's the little things</h3>
            </div>
          ) : 
          (
            <div>
              <h3 className="gratitude-description">Sometimes it's the little things</h3>
              <img src="https://cdn0.iconfinder.com/data/icons/flowers-3/450/lotus-512.png"></img>
            </div>
          )
      }
    </>
  )
}