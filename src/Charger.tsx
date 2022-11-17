import axios from "axios";
import { useState, useEffect } from "react";

 function Charger(){
const [charger, setCharger] = useState([])

useEffect(() => {
    axios
    .get("https://belib.paris/api/infra/location?acceptExternalCpos=true?key=AIzaSyA91K3Vg2JSVKT7soDXik5Kk5eeOceaXxQ")
    .then(response => console.log(response) )
    .catch(error =>console.log(error));
 }, []);

return(
    <div>
   
       <ul>
        {
        charger.map(get=>(
            <li key={get.id}>{get.name}</li>
        ))
        }
       </ul>
    </div>
)
 }

export default Charger


//setCharger(response.data