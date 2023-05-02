import React from "react";
import ArtCard from "./ArtCard"
import { Container } from "semantic-ui-react";

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
        {artToDisplay}
        <br />
        </Container>
    );
}

export default ArtList;