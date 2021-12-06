import {Button} from "react-bootstrap"
import React, { useState } from 'react'
import useCounter from "./useCounter"


const Contador = () => {

    const {counter, handleSumar, handleRestar, handleReset} = useCounter(5)

    return (
        <div>
            <h1>Contador: {counter}</h1>
            <Button variant="primary" onClick={handleSumar}>Sumar</Button>
            <Button variant="primary"  onClick={handleReset}>Reset</Button>
            <Button variant="primary" onClick={handleRestar}>Restar</Button>

        </div>
    )
}

export default Contador
