import React from 'react';
import Search from '../search/search';
import Map from '../map/map';
import Nav from '../nav';
import Banner from '../banner/banner';

const Home = () => {
    return (
        <main>
            <Nav />
            <Banner />
            <Search />
            <Map /> 
        </main>
    )
}

export default Home;