import{useEffect,useState} from 'react';

export const About = () => {
     const userbasicdata={name:'samaug',age:28,from:'tirunelveli'};
    const [userval,setUserval]=useState(userbasicdata);
    const data=[{id:1,
        question:'who is this',
         answer:'react have multi option but main of the function reusable component'},
        {id:2,
        question:'where find data strure',
         answer:' date find the json and object and array'}
       ,];

      


  useEffect(()=>{setUserval(userbasicdata)},[]);
    return(
        <>
        <div style={{textAlign:"center" ,backgroundColor:'#F2F2F2'}}>{data.map((item)=>{
           return <p key={item.id}>{item.question}</p>
        })}
        <p>{userval.name}</p>
        </div>
        
        
        </>
    )
}