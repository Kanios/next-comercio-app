"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'


export default function Registro() {

    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [edad, setEdad] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [intereses, setIntereses] = useState("")
    const [permiteOfertas, setPermiteOfertas] = useState(false)
    const rol = "usuario"

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email: email,
            password: password,
            name: name,
            edad: edad,
            ciudad: ciudad,
            intereses: intereses,
            permiteOfertas: permiteOfertas ? "Si" : "No",
            rol : rol,
        }


        fetch("/api/users/signup", {
            method: "POST",
            headers: {
            //Authorization: `Bearer ${tokenJWT}`
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
        
        
        router.push("/")
    }

    const handlePermiteOfertasChange = (e) => {
        setPermiteOfertas(e.target.checked);
    }
    return (
        <section className="">
            <div className="w-full bg-black rounded-lg shadow dark:border md:mt-0  xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <p className="text-white">Regístrate</p>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Correo Electrónico" required="" />
                        </div>
                        <div>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Contraseña" x-model="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                        <div>
                            <input onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre" required="" />
                        </div>
                        <div>
                            <input onChange={(e) => setEdad(e.target.value)} type="text" name="edad" id="edad" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Edad" required="" />
                        </div>
                        <div>
                            <input onChange={(e) => setCiudad(e.target.value)} type="text" name="ciudad" id="ciudad" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ciudad" required="" />
                        </div>
                        <div>
                            <input onChange={(e) => setIntereses(e.target.value)} type="text" name="intereses" id="intereses" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Intereses" required="" />
                        </div>
                        <div className="flex items-center mb-4">
                            <label htmlFor="permiteOfertas" className="text-sm text-gray-600 dark:text-gray-300 mr-2">Permitir Recibir Ofertas </label>
                            <input
                                onChange={handlePermiteOfertasChange}
                                type="checkbox"
                                name="permiteOfertas"
                                id="permiteOfertas"
                                checked={permiteOfertas}
                                className="rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        <div className="flex justify-between">
                            <Link href="/login" className="align-start text-xs font-thin text-white hover:underline">Ya tengo una cuenta</Link>
                        </div>
                        <button type="submit" className="w-full text-blue-600 bg-white hover:bg-blue-100 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center">Registrar</button>
                    </form>
                </div>
            </div>

        </section>
    )
}