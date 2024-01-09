"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'


export default function Registro() {

    const router = useRouter()

    const [id, setId] = useState("")
    const [password, setPassword] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [actividad, setActividad] = useState("")
    const [titulo, setTitulo] = useState("")
    const [resumen, setResumen] = useState("")
    const rol = "comercio"

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            id: id,
            password: password,
            ciudad: ciudad,
            actividad: actividad,
            titulo: titulo,
            resumen: resumen,
            rol : rol,
        }

        fetch("/api/comercios/signin", {
            method: "PUT",
            headers: {
            //Authorization: `Bearer ${tokenJWT}`
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
        
        
        console.log('Se han cambiado los datos');
        router.push("/")
    }

    const handleEliminarCuentaClick = (e) => {
        const user = {
            id: id,
        }

        fetch("/api/comercios/signin", {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }

    return (
        <section className="">
            <div className="w-full bg-black rounded-lg shadow dark:border md:mt-0  xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <p className="text-white">Cambiar Datos Comercio</p>
                    <form className="space-y-4 md:space-y-6">
                        <div>
                            <input onChange={(e) => setId(e.target.value)} type="text" name="id" id="id" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Identificador" required="" />
                        </div>
                        <div>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Contraseña" x-model="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                        <div>
                            <input onChange={(e) => setCiudad(e.target.value)} type="text" name="ciudad" id="ciudad" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ciudad" required="" />
                        </div>
                        <div>
                            <input onChange={(e) => setActividad(e.target.value)} type="text" name="actividad" id="actividad" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Actividad" required="" />
                        </div>
                        <div>
                            <input onChange={(e) => setTitulo(e.target.value)} type="text" name="titulo" id="titulo" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Título" required="" />
                        </div>
                        <div>
                            <input onChange={(e) => setResumen(e.target.value)} type="text" name="resumen" id="resumen" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Resumen" required="" />
                        </div>

                        <button onClick={handleEliminarCuentaClick} className="w-full text-red-600 bg-white hover:bg-red-200 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center">Eliminar Comercio</button>
                        <button onClick={handleSubmit} className="w-full text-blue-600 bg-white hover:bg-blue-100 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center">Cambiar Datos</button>
                        
                    </form>
                </div>
            </div>

        </section>
    )
}