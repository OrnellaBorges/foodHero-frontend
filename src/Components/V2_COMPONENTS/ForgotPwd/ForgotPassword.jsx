import React, { useState } from "react";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Vous pouvez ajouter ici la logique de réinitialisation du mot de passe avec l'e-mail saisi
        // Cette exemple suppose que l'e-mail a été soumis avec succès.

        // Réinitialiser le champ de l'e-mail
        setEmail("");

        // Afficher un message de confirmation
        setMessage(
            "Un e-mail de réinitialisation de mot de passe a été envoyé."
        );

        // Marquer le formulaire comme soumis
        setIsSubmitted(true);
    };

    return (
        <div>
            <h2>Mot de passe oublié</h2>
            {isSubmitted ? (
                <p>{message}</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Adresse e-mail :</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit">
                        Envoyer un e-mail de réinitialisation
                    </button>
                </form>
            )}
        </div>
    );
}

export default ForgotPassword;
