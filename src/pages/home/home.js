import React, { useState } from 'react';
import Search from '../../components/search/search';
import MapRenderer from '../../components/map/map';
import Footer from '../../components/footer/footer'
import Nav from '../../components/nav';
import Banner from '../../components/banner/banner';

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