import React,{useState} from 'react'
import Child from '../component/child'
import {themecontext}from '../component/theme'
export const Homepage = () => {
    const [theme,setTheme]=useState('light')
    
    return(
        <themecontext.Provider value={{theme,setTheme}}>
        <h1>value2:{theme}</h1>
<Child/>
        </themecontext.Provider>
    )
}
