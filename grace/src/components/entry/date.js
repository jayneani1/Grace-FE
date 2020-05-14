import React from "react"
import { Form } from "react-bootstrap"

export default function Date( { gratitude, setGratitude} ){
    const handleDate = (e) => {
        let newGratitude = { ...gratitude }
        newGratitude.date = e.target.value
        setGratitude(newGratitude)
    }

    return (
        <>
            <Form.Group>
                <Form.Control
                    type="text"
                    value={gratitude.date}
                    onChange={handleDate}
                    placeholder="Date"
                />
            </Form.Group>
        </>
    )
}