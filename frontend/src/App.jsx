function App() {

  return (
    <div className="container">

      <h1>
        🏨 HotelAI Austria
      </h1>

      <div className="card">

        <h2>
          Gästeanfrage
        </h2>

        <textarea 
          placeholder="Nachricht vom Gast einfügen..."
        />

        <button>
          ✨ Antwort generieren
        </button>

      </div>


      <div className="card">

        <h2>
          KI Antwort
        </h2>

        <textarea 
          placeholder="Die KI Antwort erscheint hier..."
          readOnly
        />

      </div>

    </div>
  )
}

export default App