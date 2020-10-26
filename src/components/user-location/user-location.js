import React from 'react';


const Location = () => {
      

    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(setPosition, showError);
    }else{
        
        alert ("Browser doesn't Support Geolocation");
    }
    
    function setPosition(position){
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let local = [ latitude, longitude ];
        console.log(latitude, longitude);

      window.localStorage.setItem("coordinates", JSON.stringify(local));
    };
    
   function showError(error){
        alert (` ${error.message}`) ;
    }
        } 

export default Location;