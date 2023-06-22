import Centre from "@/models/Centre";
import connectMongo from "@/models/connectMongo";
import { useState } from "react";
import Link from "next/link";

export default function Home({ places }) {
    const [city, setCity] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [timings, setTimings] = useState("");
    const [message, setMessage] = useState("");
    const [centres, setCentres] = useState(JSON.parse(places));

    async function addCentre() {
        setMessage("");
        console.log(city, address);
        await fetch("/api/addCentre", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ city: city, name: name, address: address, timings: timings, count: 0 }),
        }).then(res => res.json())
            .then((res) => {
                setMessage(res.message);
            });
    }

    return (
        <main className="flex flex-col h-screen items-center">
            <nav className="bg-orange-600 w-full text-white mb-20">
                <div className="container w-full text-white flex p-2 items-center">
                    <img src="/travelling.png" className="w-8 mr-2" />
                    <span className="navbar-brand mb-0 h1 text-white text-3xl">Flight booking</span>
                </div>
            </nav>
            <div className="p-8">
            <h1 className="text-3xl"> Avaliable Flights </h1>
            <h1 className="text-red-500">{message}</h1>
            <div className="flex flex-row gap-x-2">
                <input type="text" placeholder="Flight name" value={city} onChange={(e) => setCity(e.target.value)} className="p-2 bg-gray-300 outline-none" />
                <input type="text" placeholder="Country" value={name} onChange={(e) => setName(e.target.value)} className="p-2 bg-gray-300 outline-none" />
                <input type="text" placeholder="address" value={address} onChange={(e) => setAddress(e.target.value)} className="p-2 bg-gray-300 outline-none" />
                <input type="text" placeholder=" booking timings" value={timings} onChange={(e) => setTimings(e.target.value)} className="p-2 bg-gray-300 outline-none" />
                <button className="bg-orange-500 p-2" onClick={() => addCentre()}>add</button>
            </div>
            <div className="flex flex-col w-max gap-y-4">
            <Link href={"/"}><button className="bg-red-600 p-2 m-3 text-white">logout</button></Link>
                <h1>Add Flights</h1>
                {centres.map((c, key) => {
                    return (
                        <div className="flex flex-col border p-2 border-gray-300" key={key}>
                            <h1 className="text-xl">{c.name}</h1>
                            <span>City: {c.city}</span>
                            <span>Address: {c.address}</span>
                        </div>
                    )
                })}
            </div>
            </div>
        </main>
    );
}

export async function getServerSideProps() {
    await connectMongo();
    let centres = await Centre.find({});
    console.log(centres);
    return {
        props: {
            places: JSON.stringify(centres),
        },
    };
}