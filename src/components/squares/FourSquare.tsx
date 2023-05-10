import React from 'react'

function FourSquare() {
    return (
        <div className='squaresMain'>
            <div className='magreza'>
                <div className='magrezaBlock'>
                    <img src="https://i.ibb.co/31Z10Hk/down.png" alt="" className='tumbsM' />
                    <h1>Magreza</h1>
                    <span>IMC está entre 0 e 18.5</span>
                </div>
                <div className='normalBlock'>
                    <img src="https://i.ibb.co/93str8c/up.png" alt="" className='tumbsN' />
                    <h1>Normal</h1>
                    <span>IMC está entre 18.5 e 24.9</span>
                </div>
            </div>
            <div className='sobrepeso'>
                <div className='sobrepesoBlock'>
                    <img src="https://i.ibb.co/31Z10Hk/down.png" alt="" className='tumbsS' />
                    <h1>Sobrepeso</h1>
                    <span>IMC está entre 24.9 e 30</span>
                </div>
                <div className='obesidadeBlock'>
                    <img src="https://i.ibb.co/31Z10Hk/down.png" alt="" className='tumbsO' />
                    <h1>Obesidade</h1>
                    <span>IMC está entre 30 e 99</span>
                </div>
            </div>
        </div>
    )
}

export default FourSquare