import React, { useState, useContext, useEffect } from "react"
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


export default function CreateEntry(props) {
    const universalContext = useContext(UniversalContext);
    const [newEntry, setNewEntry] = useState({
        Title: "",
        Date: "",
        Summary: "",
        Mood: "",
        is_public: "True",
      })

    const [Entry, setEntry] = useState({
      })
console.log(Entry)

	const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await createEntry(newEntry)
        .then(response => {
            if(response.status === 201) {
                Entry.push(res)
                setEntry(res)
                console.log("sup")
                 // works but needs to render on page after submit
            }
        })
    }

	return (
		<div className="auth-body">
			<div className="create-entry-wrapper">
				<div className="create-entry-container">
					<div className="create-entry"><h1> <img className="lotus" src="https://cdn0.iconfinder.com/data/icons/flowers-3/450/lotus-512.png"></img></h1></div>
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
						       value={universalContext.newEntry.mood}
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