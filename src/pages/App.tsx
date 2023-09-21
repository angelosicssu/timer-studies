import { useState } from 'react';
import '../App.css'
import Cronometro from '../components/Cronometro'
import Form from '../components/Form'
import List from '../components/List'
import style from './App.module.scss'
import { ITarefa } from '../types/tarefa';

function App() {

  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]); //HOOK => UseState = const [Estado, funcaoQueMudaOEstado]

  return (
    <>
      <div className={style.AppStyle}>
        <Form setTarefas={setTarefas}/>
        <List tarefas={tarefas}/>
        <Cronometro />
      </div>
    </>
  )
}

export default App
