import logo from './head.png';
import garra from './garra.jpg';
import lamento from './lamento.jpg';
import cumpridora from './cumpridora.jpg';
import gelo from './gelo.jpg';
import veneno from './veneno.jpg';
import black from './black.jpg';
import './App.css';
import React, { useState } from 'react'


function App() {
  
  const [showElement, setShowElement] = useState(false)
  const [showElement1, setShowElement1] = useState(false)
  const [showElement2, setShowElement2] = useState(false)
  const [showElement3, setShowElement3] = useState(false)
  const [showElement4, setShowElement4] = useState(false)
  const [showElement5, setShowElement5] = useState(false)
  
  const showOrHide = () => 
  {if (showElement == false ) 
    {
      setShowElement(true)
      setShowElement1(false)
      setShowElement2(false)
      setShowElement3(false)
      setShowElement4(false)
      setShowElement5(false)

    }else {
      setShowElement(false)
    } 
      
    } 

    const showOrHide1 = () => 
    {if (showElement1 == false ) 
      {
        setShowElement1(true)
        setShowElement(false)
        setShowElement2(false)
        setShowElement3(false)
        setShowElement4(false)
        setShowElement5(false)
      }else {
        setShowElement1(false)
      } 
        
      } 

      const showOrHide2 = () => 
      {if (showElement2 == false ) 
        {
          setShowElement2(true)
          setShowElement(false)
          setShowElement1(false)
          setShowElement3(false)
          setShowElement4(false)
          setShowElement5(false)
        }else {
          setShowElement2(false)
        } 
          
        } 
        
        const showOrHide3 = () => 
        {if (showElement3 == false ) 
          {
            setShowElement3(true)
            setShowElement(false)
            setShowElement2(false)
            setShowElement1(false)
            setShowElement4(false)
            setShowElement5(false)

          }else {
            setShowElement3(false)
          }
            
          } 

          const showOrHide4 = () => 
          {if (showElement4 == false ) 
            {
              setShowElement4(true)
              setShowElement(false)
              setShowElement2(false)
              setShowElement3(false)
              setShowElement1(false)
              setShowElement5(false)
            }else {
              setShowElement4(false)
            } 
              
            } 

            const showOrHide5 = () => 
            {if (showElement == false ) 
              {
                setShowElement5(true)
                setShowElement(false)
                setShowElement2(false)
                setShowElement3(false)
                setShowElement4(false)
                setShowElement1(false)
              }else {
                setShowElement5(false)
              } 
                
              } 
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="tarja"></div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        {showElement ? <div className="container1">
        <h2>Garra Longa</h2>
         <p>Jeor Mormont deu Garralonga para Jon Snow como uma recompensa por ter salvado sua vida a partir de uma criaturas. Antes de dar a Jon refez suas alças, substituindo o urso por um lobo gigante, o símbolo da Casa Stark.
Seguindo a coroação de Jon Snow como Rei no Norte e o novo chefe da Casa Stark, Garralonga tornou-se a nova espada de aço valiriano da Casa Stark, após a destruição de Gelo por Lorde Tywin Lannister.</p>
      </div> : null}
      {showElement1 ? <div className="container1">
        <h2>Lamento de Viuva</h2>
         <p>A Lamento de Viúva é uma das das duas espadas de aço valiriano forjadas a partir de Gelo, a espada da Casa Stark por ordens de Tywin Lannister. Sua espada irmã é a Cumpridora de Promessas. Sua lâmina possui ondulações em vermelho e preto através do aço e sua bainha é decorada em ouro, com inúmeros leões com olhos de rubi.</p>
      </div> : null}
      {showElement2 ? <div className="container1">
        <h2>Cumpridora de Promessas</h2>
         <p>A Cumpridora de Promessas é uma das das duas espadas de Aço Valiriano forjadas a partir de Gelo, a espada da Casa Stark por ordens de Tywin Lannister. Sua espada irmã é a Lamento de Viúva.</p>
      </div> : null}
      {showElement3 ? <div className="container1">
        <h2>Gelo</h2>
         <p>Gelo era uma espada larga de aço valiriano e uma herança da Casa Stark. Foi usado na guerra e em ocasiões cerimoniais pelo Senhor de Winterfell. Ele está na posse da Casa Stark há gerações e foi mantido em uma bainha especial feita com a pele de um lobo. Foi derretido e reforjado como duas espadas: Lamento de Viúva e Cumpridora de Promessas.</p>
      </div> : null}
      {showElement4 ? <div className="container1">
        <h2>Veneno de Coração</h2>
         <p>Veneno do Coração é a espada ancestral de aço valiriano da Casa Tarly. Os Tarlys possuem a espada a cerca de 500 anos, e geralmente é exibido orgulhosamente em um manto em sua sede em Monte Chifre.</p>
      </div> : null}
      {showElement5 ? <div className="container1">
        <h2>BlackFire</h2>
         <p>A Espada Blackfire era a espada dos Reis Targaryen, feita de aço valiriano, foi forjada e trazida de Valíria para Westeros pelo rei Aegon I, cognominado de O Conquistador. A espada Blackfire era um símbolo de honra para a família Targaryen</p>
      </div> : null}
      <div className="grid">
        <div className="espadas">
          <ul><img src={garra} className="garra"/>
          <button onClick={showOrHide} className='btn'>Garra Longa</button></ul>

         <ul><img src={lamento} className="lamento"/>
          <button onClick={showOrHide1}>Lamento de viuva</button></ul>

         <ul><img src={cumpridora} className="cumpridora"/>
          <button onClick={showOrHide2}>Cumpridora de Promessas</button></ul>

          <ul><img src={gelo} className="gelo"/>
          <button onClick={showOrHide3}>Gelo</button></ul>

          <ul><img src={veneno} className="veneno"/>
          <button onClick={showOrHide4}>Veneno de Coração</button></ul>

          <ul><img src={black} className="black"/>
          <button onClick={showOrHide5}>BlackFire</button></ul>
          
        </div>
      </div>
    </div>
  );
}

export default App;

