import React, { useState } from 'react'
import CategoriasList from './CategoriasList'
import CategoriasApp from './CategoriasApp'

const Categorias = () => {

    const [categorias, setCategorias] = useState([])

    return (
        <div>
            <h1>Encuentra tu GIF</h1>
            <CategoriasApp setCategorias={setCategorias} />
            <CategoriasList categorias={categorias} />
        </div>
    )
}

export default Categorias