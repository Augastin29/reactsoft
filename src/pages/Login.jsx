import React, { useState, useEffect } from 'react'
import { senddatatoapi } from '../api/apiser'

export const Login = () => {
  const [state, setState] = useState(0)
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    conpassword: ""
  });
  const handelClick = () => {b
  
    setState((state) => state + 1)
  }
  const baseApi = 'fakestoreapi.com/products'
  const [message, setMessage] = useState("");
  function fetchData() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchData();
    

    setTimeout(() => { console.log('finshed') }, 2000)
  }, [state])

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password || !formData.conpassword) {
      setMessage("Please fill all fields.");
      return;
    }

    if (formData.password !== formData.conpassword) {
      setMessage("Passwords do not match.");
      return;
    }
    console.log("Form submitted:", formData);
    try{
      let response= await senddatatoapi(formData)
      if(response.sucess){
 setMessage("Registration successful!");
      }else{
         setMessage( response.error||"Register failed");
         console.log('response==error==',response.error)
      }
    }catch{}


   
  }

  return (
    <div>
      <h1>count:{state}</h1>
      <button onClick={handelClick}>click</button>
      <div style={{ maxWidth: "400px", margin: "50px auto" }}>
        <h2>Register</h2>
        {message && <p style={{ color: "red" }}>{message}</p>}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          {/* <div style={{ marginBottom: "10px" }}>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px" }}
            />
          </div> */}
          <div><label>password:</label>
          <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          style={{width:'100%',padding:"8px"}}
          /></div>
          <div style={{ marginBottom: "10px" }}>
            <label>Confirm Password:</label>
            <input
              type="password"
              name="conpassword"
              value={formData.conpassword}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <button type="submit" style={{ padding: "10px 20px" }}>
            Register
          </button>
        </form>
      </div>
    </div>

  )
}