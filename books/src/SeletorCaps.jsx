function SeletorCaps(props){
    return(
        <button className="seletor">
           <i className="bi bi-list-task"></i>
           <p>{`Capitulo ${props.capituloAtual}`}</p>
        </button>
    );
}
export default SeletorCaps;