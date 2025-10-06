import {useMemo,useState} from 'react'

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

    return(
        <>
        <h1>Contact:{}</h1>
        <button onClick={addvalue}>addcount</button>
        <button onClick={addfoun}>addarr</button>
        <p>arrvalue:{arrval}</p>
        <p>{maxval()}</p>
        <p>count:{count}</p>
        </>
    )
}
