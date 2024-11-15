import { createContext } from 'react';

type SearchUserContextProviderProps = {
    children: React.ReactNode;
};

type SearchUserContextType = {

};

export const SearchUserContext = createContext({} as SearchUserContextType);

export const SearchUserContextProvider = ({ children }: SearchUserContextProviderProps) => {

    return (
        <SearchUserContext.Provider
            value={{

            }}
        >
            {children}
        </SearchUserContext.Provider>
    );
};