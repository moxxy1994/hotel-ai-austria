function MessageInput({
    message,
    setMessage,
    sendMessage
}) {


    return (

        <div className="message-input">


            <input

                type="text"

                value={message}

                onChange={(e) =>
                    setMessage(e.target.value)
                }

                placeholder="Nachricht vom Gast eingeben..."

            />


            <button onClick={sendMessage}>

                ✨ Senden

            </button>


        </div>

    );

}

export default MessageInput;