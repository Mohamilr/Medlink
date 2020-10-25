import React, { useState } from 'react';
import Search from '../search/search';
import MapRenderer from '../map/map';
import Footer from '../footer/footer'
import Nav from '../nav';
import Banner from '../banner/banner';

const Home = () => {
    const [results, setResults] = useState('');
    const [lat, setLat] = useState(6.4550575);
    const [lng, setLng] = useState(3.3941795);

    return (
        <main>
            <Nav />
            <Banner />
            <Search setResults={setResults} setLat={setLat} setLng={setLng} lat={lat} lng={lng} />
            <MapRenderer results={results} lat={lat} lng={lng} />
            <Footer/>
        </main>
    )
}

export default Home;