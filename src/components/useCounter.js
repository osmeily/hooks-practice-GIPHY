import { useState } from 'react'

const useCounter = (value = 10) => {

    const [counter, setCounter] = useState(value)
    //El segundo es el que modifica al primero y entre parentesis se le pasa el parametro

    const handleSumar = () => {
        setCounter(counter +1)
    }
    const handleRestar = () => {
        setCounter(counter-1)
    }
    const handleReset = () => {
        setCounter(0)
    }
//Se retorna lo que se va a usar para exportarlo
    return{
        counter,
        handleRestar,
        handleSumar,
        handleReset
    }
}

export default useCounter
