import React from 'react';
import Search from '../search/search';
import Map from '../map/map';
import Nav from '../nav';

const Home = () => {
    return (
        <main>
            <Nav />
            <Search />
            <Map />
        </main>
    )
}

export default Home;