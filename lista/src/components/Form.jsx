import {useState} from "react";

function Form(props){

    const [texto, setTexto] = useState('')

    function mudar(event){
        setTexto(event.target.value)
    }

    function enviar(){
        let aux = [...props.lista]
        aux.push(texto)
        props.setLista(aux)
    }

    return(
        <div>
            <input onChange={mudar} type="text"/>
            <button onClick={enviar}>Criar</button>
        </div>
    )
}
export default Form