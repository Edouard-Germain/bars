import logo from './logo.svg';
import './App.css';
import Map from './components/Map'
import GoogleMapReact from 'google-map-react'
import { MapContextProvider } from './contexts/Map';


function App() {
  return (
    <>
      <MapContextProvider>
        <Map></Map>
      </MapContextProvider>
   </>
  );
}

export default App;
