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
         <p>Jeor Mormont deu Garralonga para Jon Snow como uma recompensa por ter salvado sua vida a partir de uma criaturas. Antes de dar a Jon refez suas al??as, substituindo o urso por um lobo gigante, o s??mbolo da Casa Stark.
Seguindo a coroa????o de Jon Snow como Rei no Norte e o novo chefe da Casa Stark, Garralonga tornou-se a nova espada de a??o valiriano da Casa Stark, ap??s a destrui????o de Gelo por Lorde Tywin Lannister.</p>
      </div> : null}
      {showElement1 ? <div className="container1">
        <h2>Lamento de Viuva</h2>
         <p>A Lamento de Vi??va ?? uma das das duas espadas de a??o valiriano forjadas a partir de Gelo, a espada da Casa Stark por ordens de Tywin Lannister. Sua espada irm?? ?? a Cumpridora de Promessas. Sua l??mina possui ondula????es em vermelho e preto atrav??s do a??o e sua bainha ?? decorada em ouro, com in??meros le??es com olhos de rubi.</p>
      </div> : null}
      {showElement2 ? <div className="container1">
        <h2>Cumpridora de Promessas</h2>
         <p>A Cumpridora de Promessas ?? uma das das duas espadas de A??o Valiriano forjadas a partir de Gelo, a espada da Casa Stark por ordens de Tywin Lannister. Sua espada irm?? ?? a Lamento de Vi??va.</p>
      </div> : null}
      {showElement3 ? <div className="container1">
        <h2>Gelo</h2>
         <p>Gelo era uma espada larga de a??o valiriano e uma heran??a da Casa Stark. Foi usado na guerra e em ocasi??es cerimoniais pelo Senhor de Winterfell. Ele est?? na posse da Casa Stark h?? gera????es e foi mantido em uma bainha especial feita com a pele de um lobo. Foi derretido e reforjado como duas espadas: Lamento de Vi??va e Cumpridora de Promessas.</p>
      </div> : null}
      {showElement4 ? <div className="container1">
        <h2>Veneno de Cora????o</h2>
         <p>Veneno do Cora????o ?? a espada ancestral de a??o valiriano da Casa Tarly. Os Tarlys possuem a espada a cerca de 500 anos, e geralmente ?? exibido orgulhosamente em um manto em sua sede em Monte Chifre.</p>
      </div> : null}
      {showElement5 ? <div className="container1">
        <h2>BlackFire</h2>
         <p>A Espada Blackfire era a espada dos Reis Targaryen, feita de a??o valiriano, foi forjada e trazida de Val??ria para Westeros pelo rei Aegon I, cognominado de O Conquistador. A espada Blackfire era um s??mbolo de honra para a fam??lia Targaryen</p>
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
          <button onClick={showOrHide4}>Veneno de Cora????o</button></ul>

          <ul><img src={black} className="black"/>
          <button onClick={showOrHide5}>BlackFire</button></ul>
          
        </div>
      </div>
    </div>
  );
}

export default App;

