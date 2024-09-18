import React, {useEffect} from 'react'
import './App.css'
import {Header} from "./components/Header"

function App() {
  useEffect(() => {

    const tg = window.Telegram.WebApp;

    tg.ready();

  }, []);

  return (
    <Header />
  );
}

export default App;
