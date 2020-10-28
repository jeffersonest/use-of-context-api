import React from 'react';

const CountContext = React.createContext();

export const useCount = () => {
    const context = React.useContext(CountContext);
    if (!context) throw new Error("useCount must be used within a CountProvider");
    const { count, setCount } = context;
    return { count, setCount };
}

const CountProvider = ({children}) => {

    const [ count, setCount ] = React.useState(0);

    return (
        <CountContext.Provider value={{count, setCount}}>
            {children}
        </CountContext.Provider>
    )
}

export default CountProvider;
