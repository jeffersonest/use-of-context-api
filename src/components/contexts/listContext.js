import React from 'react';

const ListContext = React.createContext();

export const useList = () => {
    const context = React.useContext(ListContext);
    if (!context) throw new Error("useList must be used within a ListProvider");
    const { userList, setUserList } = context;
    return { userList, setUserList };
}

const ListProvider = ({children}) => {

    const [userList, setUserList] = React.useState([{id: 1, name: 'Default user'}]);

    return (
        <ListContext.Provider value={{userList, setUserList}}>
            {children}
        </ListContext.Provider>
    )
}

export default ListProvider;
