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
            <input onChange={mudar} className='rounded-start-pill' type="text"/>
            <button onClick={enviar} className='rounded-end-pill'>Criar</button>
        </div>
    )
}
export default Form