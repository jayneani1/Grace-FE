import React from "react"
import { Form } from "react-bootstrap"

export default function CardTitle( {gratitude, setGratitude} ){
    const handleTitleName = (e) => {
        let newGratitude = { ...gratitude }
        newGratitude.titleName = e.target.value
        setGratitude(newGratitude)
    }

    return (
        <>
            <Form.Group>
                <Form.Control
                    type="text"
                    value={gratitude.titleName}
                    onChange={handleTitleName}
                    placeholder="Title"
                />
            </Form.Group>
        </>
    )
}