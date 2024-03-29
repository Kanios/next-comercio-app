"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'


export default function Login() {

    const router = useRouter()

    const [id, setId] = useState("")
    const [password, setPassword] = useState("")

    const redirigir = (code) => {
        console.log("Code", code)
        console.log("El rol es: ",code.rol)
        if (code.status == 200) {
            localStorage.setItem('userRol', code.rol);
            console.log('Rol en redirigir:', code.rol);
            router.push("/")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            id: id,
            password: password,
        }
        fetch("/api/comercios/signin", {
            method: "POST",
            headers: {
            //Authorization: `Bearer ${tokenJWT}`
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
           .then((res) => res.json())
           .then((data) => {
                redirigir(data);
        })
 
    }


    return (
        <section>
            <div className="w-full bg-blue rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <p className="text-white">Inicia sesión con Comercio</p>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <input onChange={(e) => setId(e.target.value)} type="text" name="id" id="id" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Identificador Comercio" required="" />
                        </div>
                        <div>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Contraseña" x-model="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                        <div className="flex justify-between">
                            <Link href="/login" className="align-start text-xs font-thin text-white hover:underline">Iniciar sesión con Usuario</Link>
                        </div>
                        <button type="submit" className="w-full text-blue-600 bg-white hover:bg-blue-100 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center">Entrar</button>
                    </form>
                </div>
            </div>

        </section>
    )
}