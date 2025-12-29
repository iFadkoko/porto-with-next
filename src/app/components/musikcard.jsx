'use client';
import { useState, useCallback } from "react";
import useSoundLogic from './sound';
import { useSoundContext } from './sound-context';

export default function MusikCard() {
    const { toggle, playing } = useSoundContext();
    return (
        <div className="fixed right-10 top-7 flex flex-col items-center justify-center ring-2 p-7 rounded-2xl bg-white/10 shadow-white shadow-lg z-50">
            <img src="/Never_Enough_(Turnstile).png" alt="" className="w-20 h-20 rounded-2xl" />
            <h3 className="font-bold text-xl pt-3">Trunstile </h3>
            <p className="text-sm">Light Desain</p>
            <button className="" onClick={toggle}>
                {playing ? <img src="/pause.png" className="invert scale-50 ease-in-out duration-1000" />:<img src="play-buttton.png"  className="invert scale-40 ease-in-out duration-1000"/>}</button>
        </div>
    )
}