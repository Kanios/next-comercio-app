"use client"
import { v4 as uuidv4 } from 'uuid';

async function getUsers() {
    const res = await fetch("http://localhost:3000/api/users/signin")
    const data = await res.json()
    console.log(data.users)
    return data.users.filter(user => user.rol == 'usuario' && user.permiteOfertas == 'Si')
}

export default async function Inicio() {

    const users = await getUsers()

    return (
        <div className="container mt-4">
            <div className="col justify-evenly">
                <p className="text-center mb-4 font-bold">Lista de usuarios</p>
                {users.map((user) => (
                    <li key={uuidv4()} className="bg-slate-300 mb-2 p-4 rounded-md text-back flex justify-evenly">
                            <h3 className="font-bold">Nombre: {user.name}</h3>
                            <h3>Edad: {user.edad}</h3>
                            <h3>Ciudad: {user.ciudad}</h3>
                            <h3>Intereses: {user.intereses}</h3>
                    </li>
                ))}
            </div>
        </div>
    )
}