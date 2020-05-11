import React, { useContext } from "react"
import { Card } from "react-bootstrap"
import { TrackerContext } from "../../App"
import Moment from "react-moment"
import { Card, Button, CardTitle, CardText } from 'reactstrap';

export default function Cards( {handleDelete} ){
    const sharedStates = useContext(TrackerContext) 

    return (
        <>
            {
               // sharedStates.userProfile.targetCompanies ? 
               // ( sharedStates.userProfile.targetCompanies.map((company, index) => { 
                    return ( 
                        <Card.Body>
                            <Card className="gratitude-card" key={index} style={{ width: '21rem' }}>
                               {/* <Card.Header style={{ textAlign: "center" }}>{gratitude.Title}</Card.Header> */}
                                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                                 <CardTitle>{gratitude.Title}</CardTitle>
                                 <CardText>
                                     {gratitude.Date}
                                 </CardText>
                                 <CardText>
                                     {gratitude.Summary}
                                 </CardText>
                                 <CardText>
                                     {gratitude.Mood}
                                 </CardText>
                                 <i onClick={handleDelete} className="far fa-minus-square"></i>
                        </Card.Body>
                            </Card>
                        )
                    })
                ) : ""
            }
        </>
    )
}