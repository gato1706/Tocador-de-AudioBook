const ContainerProgresso = ({ tempoTotalFaixa,
   tempoAtualFaixa, 
   barraProgres,
    avancarPara,
    referencia
   }) => {
  const formatarTempo = (tempoEmSegundos) => {
    const tempo = new Date(null);
    tempo.setSeconds(tempoEmSegundos);
    return tempo.toISOString().slice(14, 19);
  };

  return (
    <section className="container-progresso" onClick={avancarPara}>
      <div className="progresso-total" ref={referencia} onClick={avancarPara}>
        <div
          className="progresso-atual"
          style={{
            width: `${(tempoAtualFaixa * 100) / tempoTotalFaixa}%`,
          }}
        ></div>
        <div
          className="marcador-posicao"
          style={{
            left: `${(tempoAtualFaixa * 100) / tempoTotalFaixa}%`,
          }}
        ></div>
      </div>
      <div className="metricas-tempo">
        <p>{formatarTempo(tempoAtualFaixa)}</p>
        <p>{formatarTempo(tempoTotalFaixa)}</p>
      </div>
    </section>
  );
};

export default ContainerProgresso;
