import {useState} from "react";

import Header from "./components/Header";
import ChatWindow from "./components/ChatWindow";
import MessageInput from "./components/MessageInput";
import HotelSidebar from "./components/HotelSidebar";
import HotelSelector from "./components/HotelSelector";


function App(){


const [message,setMessage]=useState("");

const [messages,setMessages]=useState([]);

const [style,setStyle]=useState("freundlich");

const [hotelId,setHotelId]=useState("001");



async function sendMessage(){


if(!message.trim()) return;



const result=await fetch(

"http://localhost:3000/api/chat",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

message:message,

style:style,

hotelId:hotelId

})

}

);



const data=await result.json();



setMessages(old=>[

...old,

{

role:"ai",

text:data.reply

}

]);



setMessage("");

}




return(

<div className="container">


<Header/>


<div className="dashboard">


<div>


<HotelSelector

hotelId={hotelId}

setHotelId={setHotelId}

/>



<HotelSidebar

hotelId={hotelId}

/>


</div>



<div className="chat-area">


<div className="card">


<label>

Antwortstil

</label>


<select

value={style}

onChange={(e)=>

setStyle(e.target.value)

}

>


<option value="freundlich">
😊 Freundlich
</option>


<option value="elegant">
🏨 Elegant
</option>


<option value="luxus">
⭐ Luxus
</option>


<option value="locker">
😎 Locker
</option>


</select>


</div>


<div className="card">


<ChatWindow

messages={messages}

/>



<MessageInput

message={message}

setMessage={setMessage}

sendMessage={sendMessage}

/>


</div>


</div>


</div>


</div>

);


}


export default App;