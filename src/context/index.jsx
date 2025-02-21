/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react'

export const contexto = createContext()

const URL = 'http://127.0.0.1:8000/personajes'

export function Proveedor ({ children }) {
  const [personajes, setPersonajes] = useState([])
  const [personajesFiltrados, setPersonajesFiltrados] = useState([])
  const [buscar, setBuscar] = useState('')

  useEffect(() => {
    fetch(URL)
      .then(respuesta => respuesta.json())
      .then(data => setPersonajes(data))
  }, [])

  const filtrar = (personajes, buscar) => {
    if (!buscar) {
      return personajes
    }
    return personajes?.filter(personaje => personaje.nombre.toLowerCase().includes(buscar.toLowerCase()))
  }

  useEffect(() => {
    setPersonajesFiltrados(filtrar(personajes, buscar))
  }, [personajes, buscar])

  return (
    <contexto.Provider value={{
        personajes,
        personajesFiltrados,
        buscar,
        setPersonajes,
        setPersonajesFiltrados,
        setBuscar,
      }}
    >
      {children}
    </contexto.Provider>
  )
}

