import s from './Card.module.css';

function Card(props){
    function deletar(e){
        let aux = [...props.lista]
        aux.splice(e,1)
        props.setLista(aux)
    }

    function concluir(event){
        event.target.style.background = '#42f5bc'
        event.target.style.color = '#fff'
    }

    return(
        <div className={s.div + ' d-flex align-items-center justify-content-between my-3'} onClick={concluir}>
            <p>{props.item}</p>
            <button onClick={()=>{deletar(props.index)}} className={s.botao}>Deletar</button>
        </div>
    )
}
export default Card