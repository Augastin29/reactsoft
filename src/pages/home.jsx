import React,{useState} from 'react'
export const Homepage = () => {
    const [state,setState]=useState()
    
    return(
        <>
        <h1>value:{state}</h1>
        </>
    )
}
