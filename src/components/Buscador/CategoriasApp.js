import React, { useEffect, useRef, useState } from 'react'
import { Form } from 'react-bootstrap'
import styled from 'styled-components'

const CategoriasApp = ({ setCategorias }) => {

    const [search, setSearch] = useState('')
    const searchRef = useRef()

    useEffect(() => {
        searchRef.current.focus()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        setCategorias(categorias => [search, ...categorias])
        setSearch('')
    }

    const handleOnChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formulario">
                    <Form.Control type="text" placeholder="Busca tu categoría" name="categoria" value={search} onChange={handleOnChange} ref={searchRef} />
                </Form.Group>
            </Form>
        </div>
    )
}

export default CategoriasApp