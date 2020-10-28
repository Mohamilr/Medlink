import React from 'react';
import Search from '../../components/search/search';
import MapRenderer from '../../components/map/map';
import Footer from '../../components/footer/footer'
import Nav from '../../components/nav';
import Banner from '../../components/banner/banner';
import Box from '../../components/infoBox/box';

const Home = () => {
    return (
        <main>
            <Nav />
            <Banner />
            <Search />
            <Box />
            <MapRenderer />
            <Footer/>
        </main>
    )
}

export default Home;