import React from "react"
import { Form } from "react-bootstrap"

export default function Summary( { gratitude, setGratitude} ){
    const handleDate = (e) => {
        let newGratitude = { ...gratitude }
        newGratitude.summary = e.target.value
        setGratitude(newGratitude)
    }

    return (
        <>
            <Form.Group>
                <Form.Control
                    type="text"
                    value={gratitude.summary}
                    onChange={handleDate}
                    placeholder="Enter at least one thing you are grateful for."
                />
            </Form.Group>
        </>
    )
}