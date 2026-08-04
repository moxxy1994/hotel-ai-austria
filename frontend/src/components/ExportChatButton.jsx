function ExportChatButton({ messages, hotelId }) {

  function exportChat() {
    if (messages.length === 0) {
      alert("Kein Gespräch zum Exportieren vorhanden.");
      return;
    }

    const content = messages
      .map((msg) => {
        const sender = msg.role === "guest" ? "Gast" : "HotelAI";
        return `${sender}: ${msg.text}`;
      })
      .join("\n\n");

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `hotel-chat-${hotelId}.txt`;
    link.click();

    URL.revokeObjectURL(url);
  }

  return (
    <button className="export-button" onClick={exportChat}>
      💾 Gespräch speichern
    </button>
  );
}

export default ExportChatButton;