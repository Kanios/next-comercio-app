import { NextResponse } from 'next/server'
import { readFileSync, writeFileSync } from 'fs';

export async function POST(request) {
    const data = await request.json()
    try{
        const users = JSON.parse(readFileSync("data/users.txt"))
        const user = users.find(user => user.email === data.email && user.password === data.password) //Esto no lo haremos así en el 2Q: lo haremos con JWT y con pwd cifrada
        if (user) {
            let rol = 'usuario' 
            
            if (user.rol === 'administrador') {
                rol = 'administrador'
            } else if (user.rol === 'comercio') {
                rol = 'comercio'
            }

            console.log("Usuario encontrado:", rol)
            return NextResponse.json({ message: "Usuario existe...", rol: rol, status: 200 })
        } else {
            return NextResponse.json({message: "Usuario no existe...", status: 400})
        }
    } catch(e){  
        return NextResponse.json({message: "Usuario no existe...", status: 400})
    }
}

export async function PUT(request) {
    const data = await request.json()
    try {
        const { email, ...userData } = data; // Extrae el email y otros datos del usuario
        const users = JSON.parse(readFileSync("data/users.txt"))
        const userIndex = users.findIndex(user => user.email === email)

        if (userIndex !== -1) {
            const updatedUser = {
                ...users[userIndex],
                ...userData,
            }

            users[userIndex] = updatedUser

            writeFileSync("data/users.txt", JSON.stringify(users))
            return NextResponse.json({ message: "Usuario actualizado...", status: 200 })
        } else {
            return NextResponse.json({ message: "Usuario no encontrado...", status: 404 })
        }
    } catch (e) {
        console.log(e)
        return NextResponse.json({ message: "Error al actualizar el usuario...", status: 500 })
    }
}

export async function GET() {
    try{
        const users = JSON.parse(readFileSync("data/users.txt"))
        //console.log(users)
        return NextResponse.json({users})
    } catch(e){  
        return NextResponse.json({message: "Usuarios no existen...", status: 400})
    }
}

export async function DELETE(request) {
   const data = await request.json()
   try {
        const users = JSON.parse(readFileSync("data/users.txt"))
        //console.log(users)
        const usersFIlter = users.filter(user => user.email != data.email) 
        //console.log(usersFIlter)
        writeFileSync("data/users.txt", JSON.stringify(usersFIlter))
        return NextResponse.json({message: "Usuario eliminado...", status: 200})
    } catch(e){
        console.log(e)
    }
}