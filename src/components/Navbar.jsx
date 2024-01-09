"use client"
import Link from 'next/link'
import './Navbar.css'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Navbar() {
    const [rol, setRol] = useState('')
    const router = useRouter()

    useEffect(() => {
        const userRol = localStorage.getItem('userRol')
        if (userRol) {
            setRol(userRol)
            console.log('Rol:', userRol)       
        }
    }, [])
    const handleRegistroComercioClick = () => {
        localStorage.removeItem('userRol')
        setRol(null);
        router.push("/")
    }

    let enlaceSesiones, enlaceNavbar2, enlaceCambiarDatosComercio;
    if (rol == 'administrador' || rol == 'comercio' || rol == 'usuario') {
        enlaceSesiones = <button onClick={handleRegistroComercioClick}>Cerrar Sesión</button>
    } else {
        enlaceSesiones = <Link href="/login">Iniciar Sesión</Link>
    }

    if (rol == 'administrador') {
        enlaceNavbar2 = <Link href="/admin/registroComercio">Registro de Comercios</Link>
    } else if (rol == 'comercio'){
        enlaceNavbar2 = <Link href="/comercio/datosUsuarios">Datos Usuarios</Link>
    } else if (rol == 'usuario'){
        enlaceNavbar2 = <Link href="/users">Cambiar Datos</Link>
    } else{
        enlaceNavbar2 = <Link href="/registrar">Regístrate</Link>
    }

    if (rol == 'comercio') {
        enlaceCambiarDatosComercio = <Link href="/comercio/cambiarDatosComercio">Cambiar Datos Comercio</Link>
    }

    return (
        <nav className="navbar py-5">
            <Link href="/">
                <h1 className="text-3xl font-bold">AppComercios</h1>
            </Link>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                {enlaceNavbar2 && <li>{enlaceNavbar2}</li>}
                {enlaceCambiarDatosComercio && <li>{enlaceCambiarDatosComercio}</li>}
                {enlaceSesiones && <li>{enlaceSesiones}</li>}
            </ul>
        </nav>
    )
}
