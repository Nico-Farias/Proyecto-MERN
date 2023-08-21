import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PreviewProyecto = ({ proyecto }) => {
  const { auth } = useAuth();
  const { nombre, _id, cliente, creador } = proyecto;

  return (
    <div className="border-b p-5 flex justify-between">
      <div className="flex items-center gap-2">
        <p className="flex-1 font-black text-sky-700 text-m">
          {nombre}
          <span className="text-sm text-gray-400 uppercase font-semibold ml-3">
            {""} {cliente}
          </span>
        </p>

        {auth._id !== creador ? (
          <p className="p-1  ml-3 text-xs rounded-lg text-white bg-green-500 font-bold uppercase">
            Colaborador
          </p>
        ) : (
          <p className="p-1  ml-3 text-xs rounded-lg text-white bg-sky-500 font-bold uppercase">
            Administrador
          </p>
        )}
      </div>

      <Link
        to={`${_id}`}
        className="text-gray-600 hover:text-gray-800 uppercase text-sm font-bold"
      >
        Ver Proyecto
      </Link>
    </div>
  );
};

export default PreviewProyecto;
