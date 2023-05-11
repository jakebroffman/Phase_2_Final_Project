import React, { useState } from "react";
import { Form } from "semantic-ui-react"

function ArtForm( { 
    artForAuction,
    setArtForAuction
} ) {
    
  const [formData, setFormData] = useState({
        artist: "",
        medium: "",
        image: "",
        openingPrice: "",
    })

    function handleArtistChange(e) {
        console.log(e.target.value)
        setFormData({
            ...formData,
            artist: e.target.value
        });
    }

    function handleTitleChange(e) {
        setFormData({
            ...formData,
            title: e.target.value
        });
    }

    function handleImageChange(e) {
        setFormData({
            ...formData,
            image: e.target.value
        });
    }

    function handlePriceChange(e) {
        setFormData({
            ...formData,
            openingPrice: e.target.value
        });
    }

    function handleMediumChange(e) {
        setFormData({
            ...formData,
            medium: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:3000/art", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(formData)
        })
        .then((r) =>r.json())
        .then((newArt) => handleNewArt(newArt))
    }

    function handleNewArt(newArt) {
        setArtForAuction([...artForAuction, newArt])
    }

    return (
        <div className="form-box">
            <h1>List A Work For Auction:</h1>
            <Form onSubmit={handleSubmit}>
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
                        placeholder="$12,000.00 (use this format)"
                        name="Asking Price"
                        onChange={handlePriceChange}
                        value={formData.openingPrice}
                    />
                    <Form.Input
                        fluid
                        label="Medium"
                        placeholder="Medium"
                        name="Medium"
                        onChange={handleMediumChange}
                        value={formData.medium}
                    />
                </Form.Group>
                <Form.Button>Submit</Form.Button>
            </Form>
        </div>
    )
}

export default ArtForm;