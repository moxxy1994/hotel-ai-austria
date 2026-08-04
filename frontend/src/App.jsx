import { useState } from "react";
import AdminPanel from "./components/AdminPanel";
import Header from "./components/Header";
import ChatWindow from "./components/ChatWindow";
import MessageInput from "./components/MessageInput";
import HotelSidebar from "./components/HotelSidebar";
import QuickActions from "./components/QuickActions";
import ExportChatButton from "./components/ExportChatButton";


function App() {


    const [message, setMessage] = useState("");

    const [messages, setMessages] = useState([]);

    const [style, setStyle] = useState("freundlich");

    const [hotelId, setHotelId] = useState("001");



    async function sendMessage(text = message) {


        if (!text.trim()) {
            return;
        }



        const guestMessage = {

            role: "guest",

            text: text

        };



        setMessages((oldMessages)=>[

            ...oldMessages,

            guestMessage

        ]);




        const result = await fetch(

            "http://localhost:3000/api/chat",

            {

                method:"POST",

                headers:{

                    "Content-Type":"application/json"

                },

                body:JSON.stringify({

                    message:text,

                    hotelId:hotelId,

                    style:style

                })

            }

        );



        const data = await result.json();




        const aiMessage = {

    role:"ai",

    text:data.reply,

    category:data.category,

    status:data.status

};



        setMessages((oldMessages)=>[

            ...oldMessages,

            aiMessage

        ]);



        setMessage("");

    }



    function sendQuickMessage(text){

        sendMessage(text);

    }




    return (

        <div className="container">


            <Header />



            <div className="dashboard">


                <HotelSidebar

                    hotelId={hotelId}

                />



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



                    <QuickActions

                        sendQuickMessage={
                            sendQuickMessage
                        }

                    />



                    <div className="card">


                        <ChatWindow

                            messages={messages}

                        />



                        <MessageInput

                            message={message}

                            setMessage={setMessage}

                            sendMessage={()=>
                                sendMessage()
                            }

                        />


                    </div>



                    <ExportChatButton

                        messages={messages}

                        hotelId={hotelId}

                        

                    />
                    <AdminPanel />

                </div>


            </div>


        </div>

    );

}


export default App;