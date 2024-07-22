import React, { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
  const navigate =useNavigate();
 const[products,setproducts]= useContext(ProductContext);
    const [image, setimage] = useState();
    const [title, settitle] = useState();
    const [price, setprice] = useState();
    const [category, setcategory] = useState();
    const [description, setdescription] = useState();
    
const Addproducthandler=(e)=>{
    e.preventDefault();
    if(title.trim().length<5  ||
    category.trim().length<5  ||
    image.trim().length<5  ||
    price.trim().length<1  ||
    description.trim().length<5  ){
      alert("every and each input must have 4 character");
      return
    }

    const product={
      id:nanoid(),
        title,
        image,
        category,
        price,
        description
    };
    setproducts([...products,product]);
    localStorage.setItem("products",JSON.stringify([...products,product]));
    navigate("/")
    toast.success("Product added succesfully ")
  };

  return (
    <form onSubmit={Addproducthandler} className="w-screen h-screen flex p-[5%]  items-center flex-col ">
      <h1 className=" text-3xl bg-red-300 p-3 mb-5 w-1/2  "> Add new Product</h1>

      <input 
       type="url"
      className=" bg-zinc-200 w-1/2 text-2xl  p-2 rounded mb-3"
        placeholder="imagelink"
        onChange={(e)=>setimage(e.target.value)}
        value={image}
    
       />
       <input 
       type="text"
      className=" bg-zinc-200 w-1/2 text-2xl  p-2 rounded mb-3"
        placeholder="Title"
        onChange={(e)=>settitle(e.target.value)}
        value={title}
    
        />
       
<div className=" w-1/2 flex justify-between ">
        <input 
       type="number"
       className=" bg-zinc-200 w-[45%]  text-1xl   p-2 rounded mb-3"
       placeholder="Price"
       onChange={(e)=>setprice(e.target.value)}
       value={price}
       
       />
          <input 
       type="text"
       className=" bg-zinc-200 w-[45%] text-1xl   p-2 rounded mb-3"
       placeholder="Category"
       onChange={(e)=>setcategory(e.target.value)}
       value={category}
       
       />
     </div>
     <textarea name="" id=""
  
       type="text"
       className=" bg-zinc-200 w-1/2 text-1xl   p-2 rounded mb-3"
       placeholder="Description"
       onChange={(e)=>setdescription(e.target.value)}
       value={description}
       rows="4"
       >
      
     </textarea>
     <div className="mt-3 w-1/2">
     <button
        className="py-2 self-start  px-4 border rounded border-blue-300 text-blue-300"
       
      >
        Add New Product
      </button>
     </div>
    </form>
  );
};

export default Create;
