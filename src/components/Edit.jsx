import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [products, setproducts] = useContext(ProductContext);
  const [product, setproduct] = useState({
    title: "",
    image: "",
    description: "",
    category: "",
    price: "",
  });

  const clickhandler= (e) => {
    setproduct({...product,[e.target.name]:e.target.value});
  };
  useEffect(() => {
    setproduct(products.filter((p) => p.id == id)[0]);
  }, [id]); 


  const Addproducthandler = (e) => {
    e.preventDefault();
    if (
      product.title.trim().length < 5 ||
      product.category.trim().length < 5 ||
      product.image.trim().length < 5 ||
      product.price.trim().length < 1 ||
      product.description.trim().length < 5
    ) {
      alert("every and each input must have 4 character");
      return;
    }
     const pi=products.findIndex((p)=>p.id==id);
     const copyData=[...products];
     copyData[pi]={...products[pi],...product}

    setproducts(copyData);
    localStorage.setItem("products", JSON.stringify(copyData));
    navigate(-1);
    toast.success('🦄 Wow so easy!');
  };
  return (
    <form
      onSubmit={Addproducthandler}
      className="w-screen h-screen flex p-[5%]  items-center flex-col "
    >
      <h1 className=" text-3xl bg-red-300 p-3 mb-5 w-1/2  "> Edit</h1>

      <input
      name="image"
        type="url"
        className=" bg-zinc-200 w-1/2 text-2xl  p-2 rounded mb-3"
        placeholder="imagelink"
        onChange={ clickhandler}
        value={product&&product.image}
      />
      <input
      name="title"
        type="text"
        className=" bg-zinc-200 w-1/2 text-2xl  p-2 rounded mb-3"
        placeholder="Title"
        onChange={ clickhandler}
        value={product && product.title}
      />

      <div className=" w-1/2 flex justify-between ">
        <input
        name="price"
          type="number"
          className=" bg-zinc-200 w-[45%]  text-1xl   p-2 rounded mb-3"
          placeholder="Price"
          onChange={ clickhandler}
        value={product && product.price}
        />
        <input
        name="category"
          type="text"
          className=" bg-zinc-200 w-[45%] text-1xl   p-2 rounded mb-3"
          placeholder="Category"
          onChange={ clickhandler}
          value={product && product.category}
        />
      </div>
      <textarea
        name="description"
        id=""
        type="text"
        className=" bg-zinc-200 w-1/2 text-1xl   p-2 rounded mb-3"
        placeholder="Description"
        onChange={ clickhandler}
        value={product && product.description}
        rows="4"
      ></textarea>
      <div className="mt-3 w-1/2">
        <button className="py-2 self-start  px-4 border rounded border-blue-300 text-blue-300">
          Edit
        </button>
      </div>
    </form>
  );
};

export default Edit; 
