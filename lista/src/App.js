import logo from './logo.svg';
import './App.css';
import Form from "./components/Form";
import {useState} from "react";
import Card from "./components/Card";

function App() {
  const [lista, setLista] = useState([])

  return (
    <div className="App">
      <Form lista={lista} setLista={setLista}></Form>
      <div>
        {lista.map((valor)=>(
            <Card item={valor}></Card>
        ))}
      </div>
    </div>
  );
}

export default App;
