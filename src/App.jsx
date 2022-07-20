import React from 'react'
import Calculator from './components/context/Calculator'
import { GlobalStorage } from './components/context/MyContext'
import img from './assets/circulo.png'
const App = () => {
    return (
        <div className="">
            <GlobalStorage>
                <Calculator />
            </GlobalStorage>
        </div>
    )
}

export default App
