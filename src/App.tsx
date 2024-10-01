import { useState, useRef } from "react";
import Login from "./components/Login"
import { SessionProvider } from "./context/SessionContext";
import "./App.css";

// User, CartItem, Session 타입 정의

function App() {
  return (
    <SessionProvider>
        <Login></Login>
    </SessionProvider>
  );
}

export default App;