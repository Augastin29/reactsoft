import {useMemo,useState,useReducer} from 'react'

export  const Contact = () => {
    const [count,setCount]=useState(10)
    const [arrval,setArrval]=useState([1,3,5,7])
    const addvalue=()=> setCount(count+1)
    
    const maxval=()=>{
        return Math.max(...arrval)
        console.log('maxing value')
    }
    const memoval=useMemo(()=>{maxval()},[arrval])
    const addfoun=()=>{
        setArrval([...arrval,Math.round(count*Math.random())])
    }
    // usereduce example handl
    let reducer=(state,counteraction)=>{
        switch(counteraction.type){
            case'increment':
            return {...state,count:state.count+1};
            case'decrement':
            return {...state,count:state.count-1};
            case'reset':
            return {...state,count:0};
            default:return state;
        }

    }
    const [state,dispatch]=useReducer(reducer,{count:0})
    const [addcount,setAddcount]=useState(0)

    return(
        <>
        <h1>Contact:{}</h1>
        <button onClick={addvalue}>addcount</button>
        <button onClick={addfoun}>addarr</button>
        <p>arrvalue:{arrval}</p>
        <p>{maxval()}</p>
        <p>count:{count}</p>
        <h2>usereduce component</h2>
        <button onClick={()=>{dispatch({type:'increment'})}}>increment</button>
         <button onClick={()=>{dispatch({type:'decrement'})}}>decrement</button>
          <button onClick={()=>{dispatch({type:'reset'})}}>reset</button>
          <p>count{state.count}</p>
        </>
    )
}
