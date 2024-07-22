import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link,useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios";

const Home = () => {
  const [products] = useContext(ProductContext);
  const {search}=useLocation();
  const category= decodeURIComponent(search.split("=")[1]);



const [filteredproducts, setfilteredproducts] = useState(null)
console.log(filteredproducts);

const getproductcategory=async ()=>{
  try {
    const{data}=await axios.get(`/products/category/${category}`);
    setfilteredproducts(data);
  } catch (error) {
    console.log(error);
  }
}
useEffect(() => {
  if(!filteredproducts ||category=="undefined" ) setfilteredproducts(products);
 if(category !="undefined" ) 
  setfilteredproducts(products.filter(p=>p.category==category));

 
}, [category,products])


  
  return products ? (
    <>
      <Nav />

      <div className=" w-[85%] p-10 flex flex-wrap overflow-x-hidden overflow-y-auto  pt-[5%] ">
        {
         filteredproducts&&
        filteredproducts.map((p, i) => (
          <Link key={i}
            to= {`details/${p.id}`}
            className="card p-3 mr-3 mb-3  border shadow rounded w-[18%] h-[44vh] flex justify-center items-center flex-col "
          >
            <div 
              className="  hover:scale-110 w-full mb-3 h-[80%] bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  `url(${p.image})`
              }}
            ></div>
            <h1 className="hover:text-blue-300   "  >{ p.title}</h1>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
