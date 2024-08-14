"use client"
import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { setDefaultHighWaterMark } from 'stream';

export const messageData = createContext<ValueProps | null>(null);

interface ValueProps{
    nav: number;
    setNav:  Dispatch<SetStateAction<number>>;
    thread: number;
    setThread:  Dispatch<SetStateAction<number>>;
    dark: boolean;
    setDark: Dispatch<SetStateAction<boolean>>;
}

const Context: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [nav, setNav] = useState<number>(0);
    const [thread, setThread] = useState<number>(0);
    const [dark, setDark] = useState<boolean>(true);
    const value: ValueProps = { nav, setNav, thread, setThread, dark, setDark};
    return (
        <messageData.Provider value={value}>
            {children}
        </messageData.Provider>
    );
};

export default Context;