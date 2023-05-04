import React from "react";
import ArtCard from "./ArtCard"
import { Container, Card } from "semantic-ui-react";

function ArtList({ artForAuction }) {

    const artToDisplay = artForAuction.map((art) => {
        return (
            <div key = {art.id} >
                <ArtCard art={art}/>
            </div>
        )
    })

    return (
        <Container>
        <h1>Auction Lots Currently Open For Bidding:</h1>
        <br />
            <Card.Group itemsPerRow={3}>
                {artToDisplay}
            </Card.Group>
        <br />
        </Container>
    );
}

export default ArtList;