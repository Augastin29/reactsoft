import { useEffect, useState } from 'react';
import "./About.css"
import MenuButton from '../component/button'


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

   const  datacollection=[{img:'http://localhost:5173/public/image/delicious-food-social-media-template/28nov_7.jpg',item:'Idli',altitem:'food'},
    {img:'http://localhost:5173/public/image/delicious-food-social-media-template/28nov_7.jpg',item:'Dosa',altitem:'food'},
    {img:'http://localhost:5173/public/image/delicious-food-social-media-template/28nov_7.jpg',item:'Poori',altitem:'food'},
    {img:'http://localhost:5173/public/image/delicious-food-social-media-template/28nov_7.jpg',item:'Pongal',altitem:'food'},
    {img:'http://localhost:5173/public/image/delicious-food-social-media-template/28nov_7.jpg',item:'Vada',altitem:'food'},
    {img:'http://localhost:5173/public/image/delicious-food-social-media-template/28nov_7.jpg',item:'Upma',altitem:'food'},
    {img:'http://localhost:5173/public/image/delicious-food-social-media-template/28nov_7.jpg',item:'Chapati',altitem:'food'},
    {img:'http://localhost:5173/public/image/delicious-food-social-media-template/28nov_7.jpg',item:'Parotta',altitem:'food'},
    
   ]

//search bar
const item= [
  "Idli",
  "Dosa",
  "Poori",
  "Pongal",
  "Vada",
  "Upma",
  "Chapati",
  "Parotta",
  "Fried Rice",
  "Veg Biryani",
  "Chicken Biryani",
  "Mutton Biryani",
  "Egg Biryani",
  "Sambar Rice",
  "Curd Rice",
  "Lemon Rice",
  "Tomato Rice",
  "Coconut Rice",
  "Kothu Parotta",
  "Paniyaram",
  "Masala Dosa",
  "Onion Dosa",
  "Rava Dosa",
  "Ghee Roast",
  "Chicken 65",
  "Chilli Chicken",
  "Chicken Lollipop",
  "Fish Fry",
  "Prawn Fry",
  "Mutton Chukka",
  "Paneer Butter Masala",
  "Paneer Tikka",
  "Veg Kuruma",
  "Chicken Gravy",
  "Mutton Gravy",
  "Egg Curry",
  "Dal Tadka",
  "Rajma",
  "Chole Bhature",
  "Samosa",
  "Puffs",
  "Burger",
  "Pizza",
  "Sandwich",
  "Noodles",
  "Manchurian",
  "Ice Cream",
  "Gulab Jamun",
  "Halwa",
  "Payasam"
];

const [searchTerm,setSearchTerm]=useState()
const [filteredItems,setFilteredItems]=useState([])

const handleSearch=(e)=>{
  const value=e.target.value
  console.log('search value===',value)
  setSearchTerm(value)
  const filtered=item.filter(ite=>{
   return  ite.toLowerCase().includes(value.toLowerCase())
  })
  console.log('filter-search===',filtered)
  setFilteredItems(filtered)
}




  useEffect(() => { setUserval(userbasicdata) }, []);
  return (
    <>
    <div style={{padding:'20px'}}>
      <label>Search</label><input type='text' value={searchTerm} onChange={handleSearch} 
      style={{borderColor:'red',
         padding:"12px"
      }} />
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {filteredItems.map((item, index) => (
          <li
            key={index}
            style={{
              padding: "8px",
              borderBottom: "1px solid #ccc",
              cursor: "pointer",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      </div>
    
      {/* <div style={{ textAlign: "center", backgroundColor: '#F2F2F2' }}>{data.map((item) => {
        return <p key={item.id}>{item.question}</p>
      })} */}
        {/* <p>{userval.name}</p> */}
      {/* </div> */}
      <div className="food-container">
        <div className="fos" >
          <img src="http://localhost:5173/public/image/delicious-food-social-media-template/28nov_7.jpg" alt="Food 1"  />
           <h4 style={{textAlgin:"center",width:"100%9"}} >Biryani44/7</h4> 
        </div>

        <div className="fos">
          <img src="http://localhost:5173/public/image/delicious-food-social-media-template/28nov_7.jpg" alt="Food 2" />
          <h4>Pizza</h4>
        </div>

        <div className="fos">
          <img src="http://localhost:5173/public/image/samosa-food-social-media-promotion-instagram-banner-post-template-design\samosa.jpg" alt="Food 3" />
          <h4>Burgers with sanvages</h4>
        </div>
        <div className="fos">
          <img src="http://localhost:5173/public/image/samosa-food-social-media-promotion-instagram-banner-post-template-design\samosa.jpg" alt="Food 3" />
          <h4>Burgers with sanvages</h4>
        </div>
        <div className="fos">
          <img src="http://localhost:5173/public/image/samosa-food-social-media-promotion-instagram-banner-post-template-design\samosa.jpg" alt="Food 3" />
          <h4>Burgers with sanvages</h4>
        </div>
        <div className="fos">
          <img src="http://localhost:5173/public/image/samosa-food-social-media-promotion-instagram-banner-post-template-design\samosa.jpg" alt="Food 3" />
          <h4>Burgers with sanvages thoose</h4>
        </div>
      </div>
      <div className="food-container">
        <div className="fos" style={{position:"relative"}} >
          <img src="http://localhost:5173/public/image/delicious-food-social-media-template/28nov_7.jpg" alt="Food 1"  />
           <MenuButton  label='submit' onClick={()=>alert('submit alert') } className='MenuButton'></MenuButton> 
        </div>

        <div className="fos">
          <img src="http://localhost:5173/public/image/delicious-food-social-media-template/28nov_7.jpg" alt="Food 2" />
          <h4>Pizza</h4>
        </div>

        <div className="fos">
          <img src="http://localhost:5173/public/image/samosa-food-social-media-promotion-instagram-banner-post-template-design\samosa.jpg" alt="Food 3" />
          <h4>Burgers with sanvages</h4>
        </div>
        <div className="fos">
          <img src="http://localhost:5173/public/image/samosa-food-social-media-promotion-instagram-banner-post-template-design\samosa.jpg" alt="Food 3" />
          <h4>Burgers with sanvages</h4>
        </div>
        <div className="fos">
          <img src="http://localhost:5173/public/image/samosa-food-social-media-promotion-instagram-banner-post-template-design\samosa.jpg" alt="Food 3" />
          <h4>Burgers with sanvages</h4>
        </div>
        <div className="fos">
          <img src="http://localhost:5173/image/samosa-food-social-media-promotion-instagram-banner-post-template-design\samosa.jpg" alt="Food 3" />
          <h4>Burgers with sanvages</h4>
        </div>
      </div>


    </>
  )
}
