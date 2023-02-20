import React, {Children, createContext} from "react";

export const AuthContext = createContext();

export const AuthProvider = ()=>{
    return(
        <AuthContext.Provider>
            {Children}
        </AuthContext.Provider>
    )
}