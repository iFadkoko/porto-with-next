'use client';

import { useState, useEffect, useCallback } from "react";
import { useSoundContext } from './sound-context';

export default function Loading() {
    const { toggle, playing } = useSoundContext();
    const [loading, setLoading] = useState(true);
    const [detik, setDetik] = useState(3);

    useEffect(() => {
        if (detik === 0) return;
        const timer = setInterval(() => {
            setDetik((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [detik]);

    return (
        <div
            className={`fixed inset-0 flex flex-col items-center justify-center bg-black transition-all duration-300 ease-in-out z-50 ${loading ? "opacity-100 scale-100" : "opacity-0  pointer-events-none "}`}>

            <div className="w-50 h-50 rounded-full animate-spin mb-5 shadow-gd shadow-blue-200 inset-shadow-kc inset-shadow-blue-200">
                <img
                    src="/Never_Enough_(Turnstile).png"
                    className="rounded-full w-full h-full object-cover"
                />

                {/* lubang tengah */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black ring-2 ring-zinc-300" /></div>
            <p className='font-bold text-xl mb-10'>Loading</p>
            <div>
                {detik > 0 ? <p>{detik}</p> : <p></p>}
            </div>
            {detik === 0 && loading && (
                <button onClick={() => {
                    toggle();
                    setLoading(false);
                }}>
                    start
                </button>
            )}
        </div>
    );
}