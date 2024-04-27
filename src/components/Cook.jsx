import React from "react";
import { createRoot } from 'react-dom/client';
import CookieBubble from "react-cookie-bubble";


function App() {
  return (
    <div className="App">
      
      <CookieBubble
                            messageTextColor='rgba(0, 0, 0, 1)'
                            buttonText='Accetta'
                            messageFontSize='17'
                            iconColor='rgba(156, 87, 25, 1)'
                            buttonColor='rgba(23, 139, 88, 1)'
                            iconVisibility={true}
                            cookiePolicyButtonText='Leggi le Policy'
                            cookiePolicyButtonUrl='https://ilgiardinodeil'
                            cookiePolicyButtonTarget='_blank'
                            boxPosition='bottom-left'
                            messageText='Il presente sito web utilizza cookie tecnici per garantire il corretto funzionamento delle procedure e migliorare la navigazione'
                            />
    </div>
  );
}





const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);