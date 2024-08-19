import brasCubasImg from './assets/brasCuubas.png'
import './App.css'
import Capa from './capa';
import SeletorCaps from './SeletorCaps';
import 'bootstrap-icons/font/bootstrap-icons.css';
import BotoesControle from './BotoesControle';
import {useState, useRef, useEffect } from 'react';
import livro from './assets/capitulos/livro';
import GerenciadorFaixa from './GerenciadorFaixa';
import ContainerProgresso from './assets/ContainerProgresso';

function App() {

  //let taTocando = false;
  const [taTocando, definirTaTocando] = useState(false)
  const [faixaAtual, definirFaixaAtual] = useState(0);
  const [tempoTotalFaixa, definirTempoTotalFaixa] = useState(0);
  const [tempoAtualFaixa, definirTempoAtualFaixa] = useState(0);
  const tagAudio = useRef(null);
  const barraProgres = useRef(null);

  useEffect(() => {
    if(taTocando){
      tocarFaixa();
    }
  }, [
    faixaAtual
  ])

  const informacoesLivro = {
    nome: 'Memorias Postumas de Bras Cubas',
    autor: "Machado de Assis",
    totalCap: 2,
    capa: brasCubasImg,
    capitulos: livro,
    textAlt: 'Capa do Livro Memorias Póstumas de Bras Cubas'
  };

  function tocarFaixa (){
    tagAudio.current.play();
    definirTaTocando(true);
  };

  const pausarFaixa = () =>{
    tagAudio.current.pause();
    definirTaTocando(false);
  }

  const tocarOuPausarFaixa = () =>{
    if(taTocando){
      pausarFaixa();
    }
    else{
      tocarFaixa();
    }
  };

  const avancarFaixa = () => {
    if(informacoesLivro.totalCap === faixaAtual + 1){
       definirFaixaAtual(0);
    }else{
    definirFaixaAtual(faixaAtual + 1)
    }
  }

  const retroFaixa = () =>{
    if (faixaAtual === 0){
      definirFaixaAtual(informacoesLivro.totalCap - 1);
    }
    else{
    definirFaixaAtual(faixaAtual - 1)
    }
  };
  const avancar15s = () => {
    tagAudio.current.currentTime += 15
  };

  const retroceder15s = () =>{
    tagAudio.current.currentTime -= 15
  };

  const avancarPara = (evento) => {
    const largura = barraProgres.current.clientWidth;
    const novoTempo = (evento.nativeEvent.offsetX / largura) * tempoTotalFaixa;
    tagAudio.current.currentTime = novoTempo;
  };

  return (
    <>
      <Capa imagemCapa={informacoesLivro.capa} textAlt={informacoesLivro.textAlt} />

      <SeletorCaps capituloAtual={faixaAtual + 1}/>

      <GerenciadorFaixa faixa={informacoesLivro.capitulos[faixaAtual]} referencia = {tagAudio}
      definirTempoTotalFaixa ={definirTempoTotalFaixa}
      definirTempoAtualFaixa={definirTempoAtualFaixa}/>

      <ContainerProgresso tempoTotalFaixa={tempoTotalFaixa} tempoAtualFaixa={tempoAtualFaixa}
      referencia={barraProgres}
      avancarPara={avancarPara}
      />

      <BotoesControle taTocando={taTocando} definirTaTocando={definirTaTocando}
      tocarOuPausarFaixa = {tocarOuPausarFaixa}
      avancarFaixa = {avancarFaixa}
        retroFaixa={retroFaixa}
        avancar15s={avancar15s}
        retroceder15s={retroceder15s}
      />

    </>
  );
}

export default App;
