import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import useProyectos from './../hooks/useProyectos';
import FormularioProyecto from '../components/FormularioProyecto';

const EditarProyecto = () => {
    const params = useParams()
    const { proyecto, obtenerProyecto, cargando } = useProyectos()

    useEffect(() => {
        obtenerProyecto(params.id)
    }, [])

    const { nombre } = proyecto;

    if (cargando) return 'Cargando...'

    return (

        <>

            <h1 className='text-4xl font-black'>Editar Proyecto: {nombre}</h1>

            <div className='mt-10 flex justify-center'>
                <FormularioProyecto />

            </div>

        </>

    )
}

export default EditarProyecto