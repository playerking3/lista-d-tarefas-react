import logo from './logo.svg';
import './App.css';
import Form from "./components/Form";
import {useState} from "react";
import Card from "./components/Card";

function App() {
  const [lista, setLista] = useState([])

  return (
    <div className="App">
        <h1>Lista de tarefas</h1>
      <Form lista={lista} setLista={setLista}></Form>
      <div className='p-3 w-25 d-flex flex-column'>
        {lista.map((valor, index)=>(
            <Card item={valor} index={index} lista={lista} setLista={setLista}></Card>
        ))}
      </div>
    </div>
  );
}

export default App;
