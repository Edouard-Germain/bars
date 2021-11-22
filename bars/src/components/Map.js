import GoogleMapReact from 'google-map-react'
import {MapContext } from '../contexts/Map'
import styled from 'styled-components'
import { useContext } from 'react'
import Marker from './Marker'
const MapContainer = styled.div`
  height: 100vh;
  width: 100%;
`

const Map = () => {
    const { location } = useContext(MapContext)
    if (!location){
        return <p>Chargement .....</p>
    }
return (
        <MapContainer>
          <GoogleMapReact
            defaultCenter={location}
            defaultZoom={14}
          >
            <Marker
              lat={48.8434964}
              lng={2.2924429}
              price = {4}
              name ={"three ducks hotel"}
            />
          </GoogleMapReact>
        </MapContainer>
        
      )
}
export default Map 