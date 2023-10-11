import React, { useState } from "react";

const Messagerie = () => {
  const [messages, setMessages] = useState([]);
  const [nouveauMessage, setNouveauMessage] = useState("");

  const envoyerMessage = () => {
    if (nouveauMessage) {
      const message = {
        texte: nouveauMessage,
        date: new Date().toLocaleString(),
      };

      setMessages([...messages, message]);
      setNouveauMessage(""); // Efface le champ de saisie
    }
  };

  const handleChange = (e) => {
    setNouveauMessage(e.target.value);
  };

  return (
    <div className="messagerie">
      <h1>Boîte de Messagerie</h1>

      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <p>{message.date}</p>
            <p>{message.texte}</p>
          </div>
        ))}
      </div>

      <div className="nouveau-message">
        <input
          type="text"
          placeholder="Nouveau message..."
          value={nouveauMessage}
          onChange={handleChange}
        />
        <button onClick={envoyerMessage}>Envoyer</button>
      </div>
    </div>
  );
};

export default Messagerie;
