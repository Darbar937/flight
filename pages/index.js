import { useState } from "react";
import Link from "next/link";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [aemail, setAemail] = useState("");
  const [apassword, setApassword] = useState("");
  const [message, setMessage] = useState("");

  return (
    <main className="flex flex-col h-screen w-full justify-start items-center">
      <nav className="bg-orange-600 w-full text-white mb-20">
        <div className="container w-full text-white flex p-2 items-center">
          <img src="/travelling.png" className="w-8 mr-2"/>
          <span className="navbar-brand mb-0 h1 text-white text-3xl">   Flight booking Application</span>
        </div>
      </nav>
      <div className="text-center">
        <h1 className="text-2xl">Login</h1>
        <h1 className="text-red-600">{message}</h1>
        <div className="flex flex-row gap-x-4">
          <div className="flex flex-col w-max gap-y-4 mt-4 border border-gray-300 p-8">
            <h1 className="text-lg">User Login</h1>
            <input type="email" placeholder="email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} className="p-2 bg-gray-300 outline-none" />
            <input type="password" placeholder="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} className="p-2 bg-gray-300 outline-none" />
            <Link href={(email != "" && password != "") ? "/home" : "#"} ><button className="bg-orange-500 p-2 w-full">Login</button></Link>
          </div>
          <div className="flex flex-col w-max gap-y-4 mt-4 border border-gray-300 p-8">
            <h1 className="text-lg">Admin Login</h1>
            <input type="email" placeholder="email" autoComplete="off" value={aemail} onChange={(e) => setAemail(e.target.value)} className="p-2 bg-gray-300 outline-none" />
            <input type="password" placeholder="password" autoComplete="off" value={apassword} onChange={(e) => setApassword(e.target.value)} className="p-2 bg-gray-300 outline-none" />
            <Link href={(aemail != "" && apassword != "") ? "/admin" : "#"} ><button className="bg-orange-500 p-2 w-full">Login</button></Link>
          </div>
        </div>
      </div>
    </main>
  );
}