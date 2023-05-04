import React from "react";
import { Form } from "semantic-ui-react"

function ArtForm(
    handleArtistChange,
    formData,
    handleTitleChange,
    handleImageChange
) {
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
                        onChange={handleArtistChange}
                        value={formData.artist}
                    />
                    <Form.Input
                        fluid
                        label="Title of Work:"
                        placeholder="Title of Work"
                        name="Title of Work"
                        onChange={handleTitleChange}
                        value={formData.title}
                    />
                    <Form.Input
                        fluid
                        label="Image:"
                        placeholder="URL for Image of Work:"
                        name="Image"
                        onChange={handleImageChange}
                        value={formData.image}
                    />
                    <Form.Input
                        fluid
                        label="Asking Price:"
                        placeholder="$12,000.00"
                        name="Asking Price"
                    />
                </Form.Group>
                <Form.Button>Submit</Form.Button>
            </Form>
        </div>
    )
}

export default ArtForm;