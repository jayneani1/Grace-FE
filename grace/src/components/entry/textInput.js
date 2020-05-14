import React, { useState, useContext } from "react"
import {UniversalContext} from "../../App";
import { Form, Col, Container, Row } from "react-bootstrap"
//import { updateUserProfile } from '../../services/api-helper-userProfile'
import { useMediaQuery } from "react-responsive"
import CardTitle from "./cardTitle"
import Summary from "./summary"
import Description from "./gratitudeDescription"
import Mood from "./Mood"
import Date from "./date"
import Cards from "./card"
import "./gratitude.css"
import {createEntry} from "../services/api-helper"


/* export default function GratitudeForm(){
    const isDesktop = useMediaQuery({query: "(min-width:1020px)"}) 
     const sharedStates = useContext(TrackerContext); 
    const [gratitude, setGratitude] = useState([
        {
            Title: "",
            Date: "",
            Summary: "",
            Mood: "",
        }
    ])
    
    const universalContext = useContext(UniversalContext);

	const handleSubmit = async (e) => {
		e.preventDefault();
		await createEntry(universalContext.entryPayload, universalContext.userInfo.token).then(response => {
			if (response.status === 201) {
				props.history.push("/home");
			}
		}).catch(error => {
			return(error);
		});
	};
    

    return (
        <>
            {
                isDesktop ? 
                    (
                        <Form style={{width: "50%", display: "block", margin: "4% auto"}} className="gratitude" onSubmit={handleSubmit}>
                            <Form.Row>
                                <Col>
                                    {<Title gratitude={gratitude} setGratitude={setGratitude} />}
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
                                <Title gratitude={gratitude} setGratitude={setGratitude} /> }
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
                                <Cards handleDelete={handleDelete}/>
                            </Row>
                        </Container>
        </>
    )
}  */



export default function CreateEntry(props) {
	const universalContext = useContext(UniversalContext);

	const handleSubmit = async (e) => {
		e.preventDefault();
		await createEntry(universalContext.entryPayload, universalContext.userInfo.token).then(response => {
			if (response.status === 201) {
				props.history.push("/home");
			}
		}).catch(error => {
			return(error);
		});
	};

	return (
		<div className="auth-body">
			<div className="create-entry-wrapper">
				<div className="create-entry-container">
					<div className="create-entry"><h1>What are you grateful for?</h1></div>
					<form onSubmit={handleSubmit} className="create-entry-form">
						<input className="create-entry-Input"
						       type="text"
						       name="title"
						       placeholder="TITLE"
						       value={universalContext.newEntry.title}
						       onChange={universalContext.handleChange} required
						/>
						<input className="create-entry-Input"
						       type="text"
						       name="date"
						       placeholder="DATE"
						       value={universalContext.newEntry.category}
						       onChange={universalContext.handleChange} required
						/>
						<input className="create-entry-Input"
						       type="text"
						       name="mood"
						       placeholder="MOOD"
						       value={universalContext.newEntry.Mood}
						       onChange={universalContext.handleChange} required
						/>
						<textarea className="create-entry-Input"
						          name="summary"
						          placeholder="SUMMARY"
						          value={universalContext.newEntry.summary}
						          onChange={universalContext.handleChange} required
						/>
						<button className="create-entry-form-button" type="submit" onClick={handleSubmit}>submit</button>
					</form>
				</div>
			</div>
		</div>
	);
}; 