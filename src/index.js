import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useGeoLocation from './Hooks/useGeoLocationHook';

const App = () => {

  const appData =  useGeoLocation();

  const renderContent = () => {
    if (appData.errorMessage && !appData.lat) {
      return <div>Error: {appData.errorMessage}</div>;
    }

    if (!appData.errorMessage && appData.lat) {
      return <SeasonDisplay lat={appData.lat} />;
    }

    return <Spinner message="Please accept location request" />;
  }

  
  return <div className="border red">{renderContent()}</div>;
  
}

ReactDOM.render(<App />, document.querySelector('#root'));
