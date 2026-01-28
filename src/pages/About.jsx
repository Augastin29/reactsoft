import { useEffect, useState } from 'react';
import "./About.css"
export const About = () => {
  const userbasicdata = { name: 'samaug', age: 28, from: 'tirunelveli' };
  const [userval, setUserval] = useState(userbasicdata);
  const data = [{
    id: 1,
    question: 'who is this',
    answer: 'react have multi option but main of the function reusable component'
  },
  {
    id: 2,
    question: 'where find data strure',
    answer: ' date find the json and object and array'
  }
    ,];




  useEffect(() => { setUserval(userbasicdata) }, []);
  return (
    <>
      <div style={{ textAlign: "center", backgroundColor: '#F2F2F2' }}>{data.map((item) => {
        return <p key={item.id}>{item.question}</p>
      })}
        <p>{userval.name}</p>
      </div>
      <div className="food-container">
        <div className="fos" style={{width:"30%"}}>
          <img src="http://localhost:5173/reactsoft/image/delicious-food-social-media-template/28nov_7.jpg" alt="Food 1" />
          {/* <h4>Biryani</h4> */}
        </div>

        <div className="food-card">
          <img src="http://localhost:5173/reactsoft/image/delicious-food-social-media-template/28nov_7.jpg" alt="Food 2" />
          <h4>Pizza</h4>
        </div>

        <div className="food-card">
          <img src="http://localhost:5173/reactsoft/image/samosa-food-social-media-promotion-instagram-banner-post-template-design\samosa.jpg" alt="Food 3" />
          <h4>Burgers</h4>
        </div>
      </div>


    </>
  )
}