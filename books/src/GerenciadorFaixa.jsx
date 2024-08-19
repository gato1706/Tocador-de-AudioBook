const GerenciadorFaixa = ({
    faixa,
    referencia,
    definirTempoTotalFaixa, 
    definirTempoAtualFaixa 
  }) => {
    return (<audio
         src={faixa}
          ref={referencia}
           onLoadedMetadata={() => definirTempoTotalFaixa(referencia.current.duration)}

           onTimeUpdate={() =>
             definirTempoAtualFaixa(referencia.current.currentTime)
           }
         />
 );
};

export default GerenciadorFaixa;