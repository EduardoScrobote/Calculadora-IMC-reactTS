import React, { ChangeEvent, useState } from 'react'
import './leftSide.css'
import { useTypewriter } from 'react-simple-typewriter';

type rightSideProps = {
  resultadoIMC: number;
  setIMCResult: (resultadoIMC: number) => void;
}

function leftSide({ resultadoIMC, setIMCResult }: rightSideProps) {

  const [text] = useTypewriter({
    words: ['Calcule o seu IMC.'],
    loop: true,
    delaySpeed: 6000
  })

  const [altura, setAltura] = useState<number>(0.00)
  const [peso, setPeso] = useState<number>(0.00)

  const handleAltura = (e: ChangeEvent<HTMLInputElement>) => {
    setAltura(parseFloat(e.target.value))
  };

  const handlePeso = (e: ChangeEvent<HTMLInputElement>) => {
    setPeso(parseFloat(e.target.value))
  };

  const handleResultIMC = () => {
    const alturaMetros = altura * altura
    const imcResult: number = peso / alturaMetros
    setIMCResult(imcResult)
    console.log(resultadoIMC)
  }

  return (
    <div className='mainLeft'>
      <div className='left'>
        <img src="https://i.ibb.co/JjX0zrZ/powered.png" alt="imc" className='imgImc' />
        <h2 className='header'>{text}</h2>
        <p className='info'>IMC é a sigla para indice de massa corpórea, parâmetro adota pela Organização Mundial da Saúde para calcular o peso ideal de cada pessoa.</p>
      </div>
      <div className='leftInputs'>
        <input className='inpt' type="number" placeholder='Digite a sua altura Ex 1.5(em metros)' onChange={handleAltura} />
        <input className='inpt' type="number" placeholder='Digite seu peso EX 75.3(em kg)' onChange={handlePeso} />
        <button className='btn1' onClick={handleResultIMC}>Calcular</button>
      </div>
      <footer className='result'>
        {resultadoIMC && <p>Seu IMC é:{resultadoIMC.toFixed(1)}</p>}
      </footer>
    </div>
  )
}

export default leftSide