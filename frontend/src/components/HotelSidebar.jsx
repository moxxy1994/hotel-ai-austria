import { useEffect,useState } from "react";


function HotelSidebar({hotelId}){


const [hotel,setHotel]=useState(null);



useEffect(()=>{


async function loadHotel(){


const result=await fetch(

`http://localhost:3000/api/hotels/${hotelId}`

);



const data=await result.json();


setHotel(data);


}


loadHotel();



},[hotelId]);




if(!hotel){


return(

<aside className="hotel-sidebar">

<p>
Hotelinformationen werden geladen...
</p>

</aside>

);

}




return(


<aside className="hotel-sidebar">


<h2>
🏨 {hotel.hotelName}
</h2>


<p>
{hotel.description}
</p>


<hr/>


<h3>📍 Standort</h3>

<p>
{hotel.address.city}, {hotel.address.country}
</p>



<h3>🕒 Check-in</h3>

<p>
{hotel.checkIn.time}
</p>



<h3>🚪 Check-out</h3>

<p>
{hotel.checkOut.time}
</p>



<h3>🍳 Frühstück</h3>

<p>
{hotel.breakfast.time}
</p>



<h3>🚗 Parkplatz</h3>

<p>
{hotel.parking.information}
</p>



<h3>🐕 Haustiere</h3>

<p>

{hotel.pets.allowed
?
"✅ Erlaubt"
:
"❌ Nicht erlaubt"}

</p>



<h3>🧖 Wellness</h3>

<p>
{hotel.wellness.openingHours}
</p>


</aside>


);


}


export default HotelSidebar;