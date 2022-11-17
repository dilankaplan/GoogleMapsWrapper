import React, { Children } from 'react';
import './App.css';
import { Wrapper } from '@googlemaps/react-wrapper';
import MapL from './components/MapL';
import Marker from './components/Marker';

function App() {
  const center ={ lat: 48.864716, lng:2.349014};
  const zoom =  12 ;
  const position = [
    {lat: 49, lng: 2.4},
    center, 
    {lat: 48.9, lng:2.35},
  
  ];

  return (
<Wrapper apiKey={"AIzaSyA91K3Vg2JSVKT7soDXik5Kk5eeOceaXxQ"}>
<MapL center= {center} zoom={zoom} >
  {position.map((position) => (<Marker position={position} /> ))}
</ MapL>
</Wrapper>
  );
}
export default App;
