import React, { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

export default function MenuProvider({ children, defaultState }) {
    const [currentMenu, setCurrentMenu] = useState(defaultState ? defaultState : '');
    return (
        <MenuContext.Provider value={{ currentMenu, setCurrentMenu }}>
            { children }
        </MenuContext.Provider>
    )
} 

export function useMenu() {
     const context = useContext(MenuContext);
     const { currentMenu, setCurrentMenu } = context;
     return { currentMenu, setCurrentMenu };
}