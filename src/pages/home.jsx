import React,{useState} from 'react'
import {child} from '../component/child'
import {themecontext}from '../component/theme'
export const Homepage = () => {
    const [state,setState]=useState('light')
    
    return(
        <themecontext.provider value={{state,setState}}>
        <h1>value2:{state}</h1>
<child/>
        </themecontext.provider>
    )
}
