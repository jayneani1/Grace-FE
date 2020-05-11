import React, { useState, useContext } from "react"
import { Form, Col, Container, Row } from "react-bootstrap"
import { TrackerContext } from "../../App"
import { updateUserProfile } from '../../services/api-helper-userProfile'
import { useMediaQuery } from "react-responsive"
import CardTitle from "./cardTitle"
import Summary from "./summary"
import Mood from "./mood"
import Date from "./date"
import Cards from "./card"
import "./gratitude.css"


export default function GratitudeForm(){
    const isDesktop = useMediaQuery({query: "(min-width:1020px)"}) 
    /* const sharedStates = useContext(TrackerContext); */
    const [gratitude, setGratitude] = useState([
        {
            Title: "",
            Date: "",
            Summary: "",
            Mood: "",
        }
    ])
    
   /* const handleSubmit = (e) => {
        e.preventDefault()
        sharedStates.userProfile.targetCompanies.push(companies)
        updateUserProfile(sharedStates.token, sharedStates.userProfile)
        setCompanies(
            {
                companyName: "",
                jobPosition: "",
                jobURL: "",
                date: "",
                pointOfContact: ""
            }
        )
    } 

    const handleDelete = (index) => {
        sharedStates.userProfile.targetCompanies.splice(index, 1)
        setCompanies( {...companies} )
        updateUserProfile(sharedStates.token, sharedStates.userProfile)
    }
    */

    return (
        <>
            {
                isDesktop ? 
                    (
                        <Form style={{width: "50%", display: "block", margin: "4% auto"}} className="gratitude" onSubmit={handleSubmit}>
                            <Form.Row>
                                <Col>
                                    <CardTitle gratitude={gratitude} setGratitude={setGratitude} />
                                </Col>
                                <Col>
                                    <Date gratitude={gratitude} setGratitude={setGratitude} />
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Summary gratitude={gratitude} setGratitude={setGratitude} />
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Mood gratitude={gratitude} setGratitude={setGratitude} />
                                </Col>
                                <Col>
                                <Form.Control className="submit" type="Submit" value="Submit" />
                                </Col>
                            </Form.Row>
                        </Form>
                    ) : 
                    (
                        <Form style={{width: "50%", display: "block", margin: "4% auto"}} className="gratitude" onSubmit={handleSubmit}>
                        <Form.Row>
                            <Col>
                                <Title gratitude={gratitude} setGratitude={setGratitude} />
                            </Col>
                            <Col>
                                <Date gratitude={gratitude} setGratitude={setGratitude} />
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Summary gratitude={gratitude} setGratitude={setGratitude} />
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Mood gratitude={gratitude} setGratitude={setGratitude} />
                            </Col>
                            <Col>
                            <Form.Control className="submit" type="Submit" value="Submit" />
                            </Col>
                        </Form.Row>
                    </Form>
                    )
            }
                        <Container>
                            <Row>
                                <Cards handleDelete={handleDelete} />
                            </Row>
                        </Container>
        </>
    )
}