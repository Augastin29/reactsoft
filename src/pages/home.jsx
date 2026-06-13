import React,{useState} from 'react'
import {Child} from '../component/child'
import {themecontext}from '../component/theme'
import axios from 'axios'
export const Homepage = () => {
    const [state,setState]=useState('light')
    
    
    return(
    <>
        <themecontext.Provider value={{state,setState}}>
       


     <Child/>
        </themecontext.Provider>
        
   </> )
}
