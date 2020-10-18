import React from 'react';
import Search from '../search/search';
import Map from '../map/map';
import Footer from '../footer/footer'
import Nav from '../nav';
import Banner from '../banner/banner';

const Home = () => {
    return (
        <main>
            <Nav />
            <Banner />
            <Search />
            <Map />
            <Footer/>
        </main>
    )
}

export default Home;