import React, {createContext, useReducer} from 'react'

const CartStateContext=createContext();
const CartDispatchContext=createContext();

export const CartProvider = ({children}) => {
    const[state,dispatch]=useReducer()
    return(
        
    )
}
