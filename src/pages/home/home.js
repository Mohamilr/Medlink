import React from 'react';
import Search from '../../components/search/search';
import MapRenderer from '../../components/map/map';
import Footer from '../../components/footer/footer'
import Nav from '../../components/nav';
import Banner from '../../components/banner/banner';
import Box from '../../components/infoBox/box';
import { useDispatch } from 'react-redux';
import { locationAction } from '../../actions/locationAction';

const Home = () => {
    const dispatch = useDispatch();

    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(setPosition, showError);
    }else{

        alert ("Browser doesn't Support Geolocation");
    }

    function setPosition(position){
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let local = [ latitude, longitude ];
        // redux action
        dispatch(locationAction(local));
    };

   function showError(error){
        alert (` ${error.message}`) ;
    }

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