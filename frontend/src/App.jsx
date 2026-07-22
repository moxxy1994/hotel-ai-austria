import { useState } from "react";

import Header from "./components/Header";
import ChatWindow from "./components/ChatWindow";
import MessageInput from "./components/MessageInput";


function App() {


    const [message, setMessage] = useState("");

    const [messages, setMessages] = useState([]);

    const [style, setStyle] = useState("freundlich");



    async function sendMessage() {


        if (!message.trim()) {
            return;
        }



        const guestMessage = {

            role: "guest",

            text: message

        };



        setMessages((oldMessages) => [

            ...oldMessages,

            guestMessage

        ]);



        const result = await fetch(

            "http://localhost:3000/api/chat",

            {

                method: "POST",


                headers: {

                    "Content-Type": "application/json"

                },


                body: JSON.stringify({

                    message: message,

                    style: style

                })

            }

        );



        const data = await result.json();



        const aiMessage = {

            role: "ai",

            text: data.reply

        };



        setMessages((oldMessages) => [

            ...oldMessages,

            aiMessage

        ]);



        setMessage("");

    }



    return (

        <div className="container">


            <Header />



            <div className="card">


                <label>

                    Antwortstil

                </label>



                <select

                    value={style}

                    onChange={(e) =>
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

    );

}


export default App;