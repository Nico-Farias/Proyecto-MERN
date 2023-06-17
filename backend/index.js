import express from "express";
import usuarioRoute from "./routes/usuarioRoutes.js";
import conectarDB from "./config/db.js";
import dotenv from "dotenv";
import cors from 'cors'
import proyectoRoute from './routes/proyectoRoutes.js'
import tareaRoute from './routes/tareaRoutes.js'


const app = express();
app.use(express.json())

dotenv.config();

conectarDB()

//configurar CORS
const whitelist = [process.env.FRONTEND_URL];

const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.includes(origin)) {
            callback(null, true)

        } else {
            callback(new Error('Error de cors'))
        }
    }
}

app.use(cors(corsOptions))

//Routing

app.use('/api/usuarios', usuarioRoute)
app.use('/api/proyectos', proyectoRoute)
app.use('/api/tareas', tareaRoute)


const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Corriendo en puerto ${PORT}`)
})