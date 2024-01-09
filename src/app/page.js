
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link'

async function getUsers() {
    const res = await fetch("http://localhost:3000/api/comercios/signin")
    const data = await res.json()
    return data.users
}

export default async function Inicio() {
    
    const users = await getUsers()

    return (
        <div className="container mt-4">
            <p className="text-center mb-4 font-bold">Lista de Usuarios</p>
            <div className="row flex justify-evenly">
               
                    {users.map((user) => (
                        <div key={uuidv4()} className="bg-slate-300 mb-2 p-4 rounded-md text-back">
                            <div className="card mb-3">
                                <div className="card-body">
                                        <Link href={`/comercio/${user.id}`}>
                                            <h3 className="font-bold">Título: {user.titulo}</h3>
                                            <h3 className="">Ciudad: {user.ciudad}</h3>
                                            <h3 className="">Resumen: {user.resumen}</h3>
                                            <h3 className="">Actividad: {user.actividad}</h3>
                                        </Link>
                                </div>
                            </div>        
                        </div>
                    ))}
                   
            </div>
        </div>
    )
}

