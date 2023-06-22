import Book from "@/models/Book";
import Centre from "@/models/Centre";
import connectMongo from "@/models/connectMongo";
import Link from "next/link";
import { useState } from "react";

export default function Home({ places }) {
    const [message, setMessage] = useState("");
    const [centres, setCentres] = useState(JSON.parse(places));

    return (
        <main className="flex flex-col h-screen justify-start items-start">
            <nav className="bg-orange-600 w-full text-white mb-20">
                <div className="container w-full text-white flex p-2 items-center">
                    <img src="/travelling.png" className="w-8 mr-2" />
                    <span className="navbar-brand mb-0 h1 text-white text-3xl">Flight ticket booking</span>
                </div>
            </nav>
            <div className="p-8">
            <h1 className="text-red-500">{message}</h1>
            <Link href={"/"}><button className="bg-red-600 p-2 m-3 text-white">logout</button></Link>
            <div className="flex flex-col gap-y-4">
                <h1 className="text-3xl mb-4">Flight Details</h1>
                {centres.map((c, key) => {
                    return (
                        <Book key={key} c={c} />
                    )
                })}
            </div>
            </div>
        </main>
    );
}

export async function getServerSideProps(context) {
    await connectMongo();
    let centres = await Centre.find({});
    console.log(centres);
    return {
        props: {
            places: JSON.stringify(centres),
        },
    };
}