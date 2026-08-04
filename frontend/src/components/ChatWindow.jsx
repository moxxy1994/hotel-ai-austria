function ChatWindow({messages}) {


    function getStatusText(status){


        if(status === "mitarbeiter"){

            return "🔴 Mitarbeiter übernehmen";

        }


        return "🟢 Automatische Antwort";

    }




    return (

        <div className="chat-window">


            {
                messages.map((msg,index)=>(


                    <div

                        key={index}

                        className={
                            msg.role === "guest"
                            ?
                            "message guest"
                            :
                            "message ai"
                        }

                    >


                        {
                            msg.role === "ai" && msg.category &&

                            <div className="category">

                                🏷️ {msg.category}

                            </div>

                        }



                        {
                            msg.role === "ai" && msg.status &&

                            <div

                                className={
                                    msg.status === "mitarbeiter"
                                    ?
                                    "status warning"
                                    :
                                    "status success"
                                }

                            >

                                {getStatusText(msg.status)}

                            </div>

                        }



                        <p>

                            {msg.text}

                        </p>


                    </div>


                ))

            }


        </div>

    );

}


export default ChatWindow;