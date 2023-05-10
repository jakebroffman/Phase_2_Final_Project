import React from "react";
import ArtCard from "./ArtCard"
import SearchBar from "./SearchBar"
import { Container, Card } from "semantic-ui-react";

function ArtList({ artForAuction, handleSearchChange }) {

const artToDisplay = artForAuction.map((art) => {
    return(
        <div className="art-card" key={art.id}>
            <br></br>
            <ArtCard className="artCard" art={art}/>
            <br></br>
        </div>
    )
})

    return (
        <Container>
        <h1 className="des">Auction Lots Currently Open For Bidding:</h1>
        <SearchBar handleSearchChange={handleSearchChange}/>
            <Card className="art-card" itemsPerRow={5}>
                {artToDisplay}
            </Card>
        </Container>
    );
}

export default ArtList;