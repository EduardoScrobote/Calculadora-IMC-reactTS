import react from 'react'
import FourSquare from '../squares/FourSquare'
import TumbsMSquare from '../squares/TumbsMSquare'
import TumbsNSquare from '../squares/TumbsNSquare'
import TumbsOSquare from '../squares/TumbsOSquare'
import TumbsSSquare from '../squares/TumbsSSquare'
import './rightSide.css'

type rightSideProps = {
  resultadoIMC: number;
}


function RightSide({resultadoIMC}: rightSideProps) {
  return (
    <div className='main'>
        {resultadoIMC === 0.00 ? <FourSquare /> : 
        resultadoIMC <= 18.5 ? <TumbsMSquare/> : 
        resultadoIMC <= 24.9 ? <TumbsNSquare/> : 
        resultadoIMC <= 30 ? <TumbsSSquare/> : 
        resultadoIMC >= 30 ? <TumbsOSquare/> : 
        null}
    </div>
  )
}

export default RightSide