import React, { useState } from 'react';
import MapRenderer from '../../components/map/map';
import Footer from '../../components/footer/footer'


const Details = () => {
    const [lat, setLat] = useState(6.4550575);
    const [lng, setLng] = useState(3.3941795);

    return (
        <main>
            <MapRenderer lat={lat} lng={lng} />
            <Footer/>
        </main>
    )
}

export default Details;