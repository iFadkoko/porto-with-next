'use client';

import { useState, useEffect } from "react";

export default function HitungMundur() {
    const [detik, setDetik] = useState(10);

    useEffect(() => {
        if (detik === 0) return;

        const timer = setInterval(() => {
            setDetik((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [detik]);

    return (
        <div style={{ textAlign: 'center', fontSize: '2rem' }}>
            <h1>{detik}</h1>
            {detik === 0 && <p>Selesai!</p>}
        </div>
    );
};
