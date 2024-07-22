import axios from "../utils/axios";
import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Loading from "./Loading";
import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { toast } from "react-toastify";

const Details = () => {
  const navigate=useNavigate();
  const[products,setproducts]= useContext(ProductContext);
  const { id } = useParams();
  const deleteProducthabndler=(id)=>{
    const filteredproducts=products.filter(p=>p.id!=id);
    setproducts(filteredproducts);
    localStorage.setItem("products",JSON.stringify(filteredproducts));
    navigate("/");
    toast.success("Deleted sucessfully")
  }
  const [product, setproduct] = useState(null);


  useEffect(() => {
    if(!product){
      setproduct(products.filter(p=>p.id==id)[0])
    }
    // getsingleproduct();
  }, []);

  return product ? (
    <div className="w-[70%] flex justify-between items-center m-auto h-full p-[10%]  ">
      <img
        className="h-[80%] object-contain w-[40%] "
        src={`${product.image}`}
        alt=""
      />
      <div className="Content   w-[50%]">
        <h1 className="text-4xl">
        {`${product.title}`}
        </h1>
        <h3 className="text-zinc-400"> {`${product.category}`}</h3>
        <h2 className="text-red-300 "> {`${product.price}`}</h2>
        <p className="mb-7">
        {`${product.description}`}
           </p>
        <Link to={`/edit/${product.id}`}
          className="py-3 px-5 mt-5 border rounded border-blue-300 text-blue-300"
          href="/create"
        >
          Edit
        </Link>
        <button onClick={()=>deleteProducthabndler(product.id)} 
          className="py-3 px-5 ml-3 border rounded border-red-300 text-red-300"
          href="/create"
          
        >
          Delete
        </button>
      </div>
    </div>
  ):( 
    <Loading/>
  );
};

export default Details;
