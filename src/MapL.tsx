import { InfoWindow } from "@react-google-maps/api";
import axios from "axios";
import React, { ReactNode, useEffect, useRef ,ReactElement, useState } from "react";
import { textChangeRangeNewSpan } from "typescript";
import Charger from "./Charger";
import Marker from "./Marker";


function MapL({
    center, 
    zoom,
    children
}:{
    center: google.maps.LatLngLiteral;
    zoom: number;
    children: ReactNode;
    } ){
    const ref = useRef<HTMLDivElement>();  
    const [map, setMap] = useState<google.maps.Map  | null>(null);   
    const style ={height:"100vh"};
   
   
    useEffect(() => {
    
        setMap(new window.google.maps.Map(ref.current!, {}));
    }, [] );

    if(map){
       map.setCenter(center);
       map.setZoom(zoom);
    };
   
return <div
 ref={ref} 
 style={style} 
 id="map" >
  {React.Children.map(children, (child: ReactElement ) =>
     React.cloneElement(child,{map})) } 
   <Charger></Charger>
  
     
     
</div>
}
export default MapL