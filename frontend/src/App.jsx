import { useState } from "react";
import Header from "./components/Header";


function App() {

    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");


    async function generateAnswer() {

        const result = await fetch(
            "http://localhost:3000/api/chat",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    message: message
                })
            }
        );


        const data = await result.json();

        setResponse(data.reply);

    }


    return (

        <div className="container">

            <Header />


            <div className="card">

                <h2>
                    Gästeanfrage
                </h2>


                <textarea
                    value={message}
                    onChange={(e) =>
                        setMessage(e.target.value)
                    }
                    placeholder="Nachricht vom Gast einfügen..."
                />


                <button onClick={generateAnswer}>
                    ✨ Antwort generieren
                </button>

            </div>



            <div className="card">

                <h2>
                    KI Antwort
                </h2>


                <textarea
                    value={response}
                    readOnly
                />

            </div>


        </div>

    );

}


export default App;