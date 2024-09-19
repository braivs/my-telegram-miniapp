import React, {useEffect} from 'react'
import './App.module.css'
import {Header} from "./components/Header"
import {Counter} from "./components/Counter"
import s from './App.module.css'

function App() {
  useEffect(() => {

    const tg = window.Telegram.WebApp;

    tg.ready();

  }, []);

  return (
    <div className={s.app}>
      <Header />
      <Counter />
    </div>
  );
}

export default App;
