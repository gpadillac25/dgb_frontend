import { ChevronDoubleUpIcon } from '@heroicons/react/24/solid'

import { useContext } from 'react'
import { contexto } from '../../context'
import Layout from '../../components/layout'
import Card from '../../components/card'
import './styles.css'

function Home() {
  const { personajes, personajesFiltrados, buscar, setBuscar } = useContext(contexto)

  const renderView = () => {
    const personajesParaMostrar = buscar ? personajesFiltrados : personajes

    if (personajesParaMostrar?.length > 0) {
      return personajesParaMostrar.map(personaje => (
        <Card key={personaje.id} data={personaje} />
      ))
    } else {
      return <p>No se encontraron resultados</p>
    }
  }

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-2'>
        <h1 className='font-medium text-xl'>MENSAJES DE AKIRA TORIYAMA</h1>
      </div>

      <input
        id='buscar'
        name='buscar'
        value={buscar}
        onChange={(event) => setBuscar(event.target.value)}
        className='rounded-lg border border-black w-80 p-2 mb-4'
        type='text'
        placeholder='Goku, Vegeta...'
      />

      <div className='grid grid-cols-4 gap-3 w-full max-w-screen-lg'>
        {renderView()}
      </div>
      <a id='back-top' href='#top'>
        <ChevronDoubleUpIcon className='h-6 w-6' />
      </a>
    </Layout>
  )
}

export default Home
