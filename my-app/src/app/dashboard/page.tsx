"use client"

import { useState } from "react";

export default function Dashboard(){
    const [name, setName] = useState("");
    
    return (
        <div>
            <h1>Dashboard Page</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
            <p>Hello, {name}!</p>
        </div>
    )

}