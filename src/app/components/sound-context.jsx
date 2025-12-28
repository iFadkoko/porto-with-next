'use client'
import { createContext, useContext } from 'react';
import useSoundLogic from './sound';

const SoundContext = createContext();

export function SoundProvider({ children }) {
    const value = useSoundLogic();
    return (
        <SoundContext.Provider value={value}>
            {children}
        </SoundContext.Provider>
    );
}

export function useSoundContext() {
    return useContext(SoundContext);
}