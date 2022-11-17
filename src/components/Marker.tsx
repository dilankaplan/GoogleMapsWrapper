
import { useEffect, useState  } from "react";

 
 function Marker({
     position , 
     map } :{
         position: google.maps.LatLngLiteral,
         map?: google.maps.Map }
          ){
     console.log({position})
     const [marker, setMarker] = useState<google.maps.Marker  | null>(null);
    //  const [selectedMarker, setSelectedMarker] = useState("");
         useEffect(() =>{
       setMarker(new google.maps.Marker({}));
    }, []);
    if(marker){
         marker.setMap(map);
       marker.setPosition(position);
     }
    //  onClick{ ()=> {
    //   setSelectedMarker(marker);
    //   {selectedMarker && (
    //       <InfoWindow position={selectedMarker.position}></Info>
    //   )}
//  }}
  //<button onClick={() => {
    //  setSelectedMarker("")
  //}}>close</button>
  
     
 return null;
  
 }
 export default Marker


