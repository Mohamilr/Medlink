import React from 'react';
import Search from '../search/search';
import Map from '../map/map';
import Footer from '../footer/footer'

const Home = () => {
    return (
        <main>
            <Search />
            <Map />
            <Footer/>
        </main>
    )
}

export default Home;