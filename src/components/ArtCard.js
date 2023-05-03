import React from "react";
import { Card, Form } from "semantic-ui-react";

function ArtCard({ art }) {

    return (
        <Card>
            <div className="content">
                <h1>Lot #: {art.id}</h1>
            </div>
            <div className="image">
                <img alt={art.title} src={art.image} />
            </div>
            <div className="content">
                <h1 className="header">Title: {art.title}</h1>
                <h1 className="header">Artist: {art.artist}</h1>
            </div>
            <div className="extra content">
                <h2 className="header">Current High Bid: {art.openingPrice}</h2>
            </div>
            <Form></Form>
        </Card>
    )

}

export default ArtCard;