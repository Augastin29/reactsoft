import axios from 'axios';
  var api= axios.create({
    baseurl:'http://localhost',
    header:{'Content-Type':'Application/json'}
  })
   export async function senddatatoapi(data){
    console.log('senddata=to=api',data)
    try{
      let response= await fetch('http://localhost:3000/register/reg',{method:'POST',
        headers:{'Content-Type':'application/json'},body:JSON.stringify(data)})
        return response.json()
    }catch(error){
      console.log(error)
throw error
    }}
   
  export default api