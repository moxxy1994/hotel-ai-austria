function ChatWindow({ messages }) {

    return (

        <div className="chat-window">

            {messages.map((message, index) => (

                <div
                    key={index}
                    className={`message ${message.role}`}
                >

                    <strong>
                        {message.role === "guest"
                            ? "Gast:"
                            : "HotelAI:"
                        }
                    </strong>


                    <p>
                        {message.text}
                    </p>

                </div>

            ))}

        </div>

    );

}

export default ChatWindow;