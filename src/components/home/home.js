import React from 'react';
import Search from '../search/search';
import Map from '../map/map';
import Footer from '../footer/footer'
import Nav from '../nav';

const Home = () => {
    return (
        <main>
            <Nav />
            <Search />
            <Map />
            <Footer/>
        </main>
    )
}

export default Home;