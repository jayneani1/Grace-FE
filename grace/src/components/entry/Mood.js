import React from "react"
import { Form } from "react-bootstrap"

export default function Mood( { gratitude, setGratitude} ){
    const handleMood = (e) => {
        let newGratitude = { ...gratitude }
        newGratitude.mood = e.target.value
        setGratitude(newGratitude)
    }

    return (
        <>
            <Form.Group>
                <Form.Control
                    type="text"
                    value={gratitude.mood}
                    onChange={handleMood}
                    placeholder="Mood"
                />
            </Form.Group>
        </>
    )
}