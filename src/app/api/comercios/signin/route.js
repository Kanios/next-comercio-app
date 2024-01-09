import { NextResponse } from 'next/server'
import { readFileSync, writeFileSync } from 'fs';

export async function POST(request) {
    const data = await request.json()
    try{
        const users = JSON.parse(readFileSync("data/comercios.txt"))
        const user = users.find(user => user.id == data.id && user.password == data.password) //Esto no lo haremos así en el 2Q: lo haremos con JWT y con pwd cifrada
        if (user) {
            let rol = 'usuario' 
            
            if (user.rol === 'administrador') {
                rol = 'administrador'
            } else if (user.rol === 'comercio') {
                rol = 'comercio'
            }

            console.log("Comercio encontrado:", rol)
            return NextResponse.json({ message: "Comercio existe...", rol: rol, status: 200 })
        } else {
            return NextResponse.json({message: "Comercio no existe...", status: 400})
        }
    } catch(e){  
        return NextResponse.json({message: "Comercio no existe...", status: 400})
    }
}

export async function PUT(request) {
    const data = await request.json()
    try {
        const { id, ...userData } = data; 
        const users = JSON.parse(readFileSync("data/comercios.txt"))
        const userIndex = users.findIndex(user => user.id == id)

        if (userIndex !== -1) {
            const updatedUser = {
                ...users[userIndex],
                ...userData,
            }

            users[userIndex] = updatedUser

            writeFileSync("data/comercios.txt", JSON.stringify(users))
            return NextResponse.json({ message: "Comercio actualizado...", status: 200 })
        } else {
            return NextResponse.json({ message: "Comercio no encontrado...", status: 404 })
        }
    } catch (e) {
        console.log(e)
        return NextResponse.json({ message: "Error al actualizar el Comercio...", status: 500 })
    }
}

export async function GET() {
    try{
        const users = JSON.parse(readFileSync("data/comercios.txt"))
        //console.log(users)
        return NextResponse.json({users})
    } catch(e){  
        return NextResponse.json({message: "Comercios no existen...", status: 400})
    }
}

export async function DELETE(request) {
   const data = await request.json()
   try {
        const users = JSON.parse(readFileSync("data/comercios.txt"))
        //console.log(users)
        const usersFIlter = users.filter(user => user.id != data.id) 
        //console.log(usersFIlter)
        writeFileSync("data/comercios.txt", JSON.stringify(usersFIlter))
        return NextResponse.json({message: "Comercio eliminado...", status: 200})
    } catch(e){
        console.log(e)
    }
}