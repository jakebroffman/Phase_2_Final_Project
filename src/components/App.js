import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import ArtList from "./ArtList";
import ArtForm from "./ArtForm"

function App() {
    const [artForAuction, setArtForAuction] = useState({});
    const [formData, setFormData] = useState({
        name: "",
        artist: "",
        medium: "",
        image: "",
        openingPrice: "",
    })

    useEffect(() => {
      fetch("http://localhost:3000/art")
      .then((r) => r.json())
      .then((art) => setArtForAuction(art))
    }, []);

    function handleArtistChange(e) {
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
                        <br></br>
                        <p>Art's Auction House is the premiere purveyor of contemporary art in Buffalo, NY</p>
                    </div>
                </Route>
                <Route path="/sellers">
                    <ArtForm 
                        handleArtistChange={handleArtistChange}
                        formData={formData}
                        handleTitleChange={handleTitleChange}
                    />
                </Route>
            </Switch>
        </div>
    );
} 

export default App;