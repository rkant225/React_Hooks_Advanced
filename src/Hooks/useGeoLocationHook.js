import {useState, useEffect} from 'react';
  
const useGeoLocation = () =>{
  const [appData, setAppData] = useState({lat : null, errorMessage: ""})

  const updateGeoLoction = () => {
    window.navigator.geolocation.getCurrentPosition(
      position => setAppData({...appData, lat: position.coords.latitude }),
      err => setAppData({...appData, errorMessage: err.message })
    );
  }


  useEffect(()=>{
    updateGeoLoction();
  },[]);

  return appData;
}

export default useGeoLocation;