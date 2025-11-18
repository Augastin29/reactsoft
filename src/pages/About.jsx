export const About = () => {
    const data=[{id:1,
        question:'who is this',
         answer:'react have multi option but main of the function reusable component'},
        {id:2,
        question:'where find data strure',
         answer:' date find the json and object and array'}
       ,]
    return(
        <>
        <div style={{textAlign:"center" ,backgroundColor:'#F2F2F2'}}>{data.map((item)=>{
           return <p key={item.id}>{item.question}</p>
        })}</div>
        </>
    )
}