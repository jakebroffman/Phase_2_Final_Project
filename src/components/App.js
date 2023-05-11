import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import ArtList from "./ArtList";
import ArtForm from "./ArtForm"

function App() {
    const [artForAuction, setArtForAuction] = useState([]);
    const [searchTerm, setSearchTerm] = useState ("")

 
    useEffect(() => {
      fetch("http://localhost:3000/art")
      .then((r) => r.json())
      .then((art) => setArtForAuction(art))
    }, []);

    function handleSearchChange(e) {
        const updatedSearchTerm = e.target.value
        setSearchTerm(updatedSearchTerm)
    }

    const artToDisplay = artForAuction.filter((art) => {
        if (searchTerm === "") {
            return (true)
        }
        else {
            return(art.artist.includes(searchTerm))
        }
    })

    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/art">
                    <ArtList 
                        artForAuction={artToDisplay}
                        handleSearchChange={handleSearchChange} 
                    />
                </Route>
                <Route exact path="/">
                    <div className="home">
                        <br></br>
                        <h1 className="business-title">Art's Auction House</h1>
                        <br></br>
                        <div className="des">
                        <p calssName="des">Art's Auction House is the premiere purveyor of contemporary art in Buffalo, NY! For the past 20 years Art's Auction House has been the East Coast home to the work of such prolific artists as: Tristan Eaton, Shepard Fairey, Jason Revok, Matt Gondek, Greg Mike, AskewOne, L'amour Supreme, and many more!</p>
                        </div>
                        <img clasName="auction-house" src="https://i.insider.com/5cbf707ab14bf42699221511?width=2000&format=jpeg&auto=webp" alt="auction house" />
                    </div>
                </Route>
                <Route path="/sellers">
                    <ArtForm 
                        artForAuction={artForAuction}
                        setArtForAuction={setArtForAuction}
                    />
                </Route>
            </Switch>
        </div>
    );
} 

export default App;