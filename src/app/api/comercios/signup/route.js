import { NextResponse } from 'next/server'
import { readFileSync, writeFileSync } from 'fs';

export async function POST(request) {
    const data = await request.json()
    try{
        const users = JSON.parse(readFileSync("data/comercios.txt"))
        writeFileSync("data/comercios.txt", JSON.stringify([...users, data]))
    } catch(e){  
        writeFileSync("data/comercios.txt", JSON.stringify([data]))
    }
    return NextResponse.json({message: "Guardando datos..."})
}