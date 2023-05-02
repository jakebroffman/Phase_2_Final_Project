import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import ArtList from "./ArtList";
import ArtForm from "./ArtForm"

function App() {
    const [artForAuction, setArtForAuction] = useState({});

    useEffect(() => {
      fetch("http://localhost:3000/art")
      .then((r) => r.json())
      .then((art) => setArtForAuction(art))
    }, []);

    console.log(artForAuction)

    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/art">
                    <ArtList artForAuction={artForAuction} />
                </Route>
                <Route exact path="/">
                    <div>
                        <h1>Art's Auction House</h1>
                    </div>
                </Route>
                <Route path="/sellers">
                    <ArtForm />
                </Route>
            </Switch>
        </div>
    );
} 

export default App;