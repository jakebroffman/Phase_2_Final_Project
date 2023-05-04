import React from "react";
import { Form } from "semantic-ui-react"

function ArtForm() {
    return (
        <div>
            <h2>List A Work For Auction:</h2>
            <Form>
                <Form.Group widths="equal">
                    <Form.Input 
                        fluid
                        label="Artist Name:"
                        placeholder="Artist"
                        name="Artist"
                    />
                    <Form.Input
                        fluid
                        label="Title of Work:"
                        placeholder="Title of Work"
                        name="Title of Work"
                    />
                    <Form.Input
                        fluid
                        label="Image:"
                        placeholder="URL for Image of Work:"
                        name="Image"
                    />
                    <Form.Input
                        fluid
                        label="Asking Price:"
                        placeholder="$12,000.00"
                        name="Asking Price"
                    />
                </Form.Group>
            </Form>
        </div>
    )
}

export default ArtForm;