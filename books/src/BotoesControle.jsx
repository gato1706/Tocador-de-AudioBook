const BotoesControle = ({

    retroFaixa, 
    tocarOuPausarFaixa,
     taTocando, 
     avancarFaixa,
     avancar15s,
     retroceder15s

    }) => {
    return (
        <div className="caixa-botoes">
            <button onClick={retroFaixa }><i className="bi bi-skip-start"></i></button>
            <button onClick={retroceder15s}><i className="bi bi-arrow-counterclockwise"></i></button>
            
            <button onClick={tocarOuPausarFaixa}>

                <i className={`bi bi-${
                    taTocando ? 'pause' : 'play'}-circle-fill`}></i>
            </button>

            <button onClick={avancar15s}><i className="bi bi-arrow-clockwise"></i></button>
            <button onClick={avancarFaixa}>
                <i className="bi bi-skip-end"></i>
            </button>
        </div>
    )
};

export default BotoesControle;