function QuickActions({ sendQuickMessage }) {

    const actions = [
        { label: "🕒 Check-in", message: "Wann ist Check-in?" },
        { label: "🚪 Check-out", message: "Wann ist Check-out?" },
        { label: "🍳 Frühstück", message: "Wann beginnt das Frühstück?" },
        { label: "🚗 Parkplatz", message: "Wo kann ich parken?" },
        { label: "🐕 Haustiere", message: "Sind Haustiere erlaubt?" },
        { label: "🧖 Wellness", message: "Welche Wellnesszeiten gibt es?" }
    ];

    return (
        <div className="quick-actions">

            {actions.map((action, index) => (
                <button
                    key={index}
                    className="quick-button"
                    onClick={() => sendQuickMessage(action.message)}
                >
                    {action.label}
                </button>
            ))}

        </div>
    );
}

export default QuickActions;