import React, { useEffect } from "react";
import "./App.css";

const WS_ADDRESS = "ws://localhost:4500";

const App = () => {
  const wsRef = React.useRef<WebSocket | null>(null);

  // On mount, start connection
  useEffect(() => {
    wsRef.current = new WebSocket(WS_ADDRESS);

    const currentWS = wsRef.current;

    console.log("CURRENT WS", currentWS);

    currentWS.onmessage = (event) => {
      console.log("NEW MESSAGE FROM SERVER");
    };

    return () => {
      if (!currentWS) return;

      // Close connection on onmount
      currentWS.close();
    };
  });

  return <div> Test </div>;
};

export default App;
