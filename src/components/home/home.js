import React, { useState } from 'react';
import Search from '../search/search';
import Map from '../map/map';
import Footer from '../footer/footer'
import Nav from '../nav';
import Banner from '../banner/banner';

const Home = () => {
    const [results, setResults] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');

    return (
        <main>
            <Nav />
            <Banner />
            <Search setResults={setResults} setLat={setLat} setLng={setLng} lat={lat} lng={lng} />
            <Map results={results} lat={lat} lng={lng} />
            <Footer/>
        </main>
    )
}

export default Home;