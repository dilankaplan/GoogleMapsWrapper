
import { useState, useEffect } from "react";

 function Charger(){
const [charger, setCharger] = useState([])

useEffect(() => {
    fetch("https://belib.paris/api/infra/location?acceptExternalCpos=true?key=AIzaSyA91K3Vg2JSVKT7soDXik5Kk5eeOceaXxQ")
    .then(response => response.json()) 
    .then(data => console.log(data) )
    .catch(error =>console.log(error));
 }, []);
//      componentDidMount(){
//     setInterval(()=>{
//     const url = "https://belib.paris/api/infra/location?acceptExternalCpos=true?key=AIzaSyA91K3Vg2JSVKT7soDXik5Kk5eeOceaXxQ";
//      const response = await fetch(url);
//      const data = await response.json();

//      this.setState({position: data });
//     },3600)
//  }

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