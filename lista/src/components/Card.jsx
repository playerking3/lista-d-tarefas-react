function Card(props){
    function deletar(e){
        e.target.parentElement.style.display = 'none'
    }

    return(
        <div>
            <p>{props.item}</p>
            <button onClick={deletar}>Deletar</button>
        </div>
    )
}
export default Card