'use client';

import { useState } from "react";

export default function Navbar() {
    const navLinks = [
        { id: '1', name: 'Home' },
        { id: '2', name: 'Skill Card' },
        { id: '3', name: 'Contac Me' },
        { id: '4', name: 'About Me' },
    ];
    const title = 'iFad Dev';

    return (
            <nav className="my-5 bg-black/10 px-10 py-4 flex use w-7/10 inset-0 h-fit mx-auto fixed justify-between rounded-xl shadow-2xl shadow-blue-700 font-bold ring-2 ring-blue-400 inset-shadow-md inset-shadow-blue-600">
                <h2>{title}</h2>
                <ul className="flex gap-10 " >
                    {navLinks.map((navLink) => (
                        <li key={navLink.id}><a className="hover:text-gray-500" href={navLink.id}>{navLink.name}</a></li>
                    ))}
                </ul>
            </nav>
    );
}