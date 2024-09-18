import React, {useEffect} from 'react'
import './App.css'
import {Header} from "./components/Header"
import {Counter} from "./components/Counter"

function App() {
  useEffect(() => {

    const tg = window.Telegram.WebApp;

    tg.ready();

  }, []);

  return (
    <>
      <Header />
      <Counter />
    </>
  );
}

export default App;
