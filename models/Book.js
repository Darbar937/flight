import { useState } from "react";

export default function Book({ c }) {
    async function addCentre() {
        await fetch("/api/add", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: c._id, count: c.count }),
        });
    }

    return (
        <div className="flex flex-col border p-2 border-gray-300">
            <h1 className="text-xl">{c.name}</h1>
            <span>City: {c.city}</span>
            <span>Address: {c.address}</span>
            <button onClick={() => addCentre()} className="bg-green-500 p-2 w-full text-white my-2">Book Appointment</button>
        </div>
    );
}