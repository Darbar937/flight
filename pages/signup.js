import { useState } from "react";
const bcrypt = require("bcryptjs");

export default function SignUp() {

    const [email, setEmail] = useState("");
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [message, setMessage] = useState("");

    async function signup() {
        setMessage("");
        let hash = await bcrypt.hash(password, 10);
        console.log(hash);
        await fetch("/api/signup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, password: hash, name: name, admin: false }),
        }).then(res => res.json())
            .then((res) => {
                setMessage(res.message);
            });
    }

    return (
        <main className="flex flex-col m-20">
            <h1>Sign Up</h1>
            <h1 className="text-red-600">{message}</h1>
            <div className="flex flex-col w-max gap-y-2">
            <input type="text" placeholder="Full Name" autoComplete="off"  value={name} onChange={(e)=> setName(e.target.value)}/>
            <input type="email" placeholder="email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="password" autoComplete="off" value={password} onChange={(e)=> setPassword(e.target.value)} />
            <button onClick={() => signup()} className="bg-orange-500">Submit</button>
            </div>
        </main>
    );
}