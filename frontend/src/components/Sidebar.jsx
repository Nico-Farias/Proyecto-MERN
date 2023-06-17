import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Sidebar = () => {

    const { auth } = useAuth()


    return (

        <aside className="md:w-80 lg:w-96 px-5 py-10">

            <p className="text-xl font-bold capitalize">Hola : {auth.nombre}</p>

            <Link
                to='crear-proyecto'
                className="bg-sky-600 w-full text-center p-3 uppercase text-white block font-bold mt-5 rounded-lg"
            >
                Nuevo Proyecto
            </Link>

        </aside>

    )
}

export default Sidebar