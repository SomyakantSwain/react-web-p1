import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link,  } from "react-router-dom";

const Nav = () => {
  const [products] = useContext(ProductContext);
  
 


 
  const ProductCategory = products && products.reduce(
    (acc, cv) => [...acc, cv.category],
    []
  );

  const distinct_Category = [...new Set(ProductCategory)];
  

  const color = () => {
    return`rgba(${(Math.random() * 255).toFixed()},
  ${(
    Math.random() * 255
  ).toFixed()},
   ${(Math.random() * 255).toFixed()},
  0.4)`;
  };
 

  return (
    <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
      <a
        className="py-3 px-5 border rounded border-blue-300 text-blue-300"
        href="/create"
      >
        Add New Product
      </a>
      <hr className=" my-3 w-[80%]" />
      <h1 className="text-2xl  mb-3 w-[80%]">Category Filter </h1>
      <div className=" w-[80%]">
        {distinct_Category.map((Cat, index) => (
          <Link
            key={index}
            to={`/?category=${Cat}`}
            className=" mb-3 flex  mr-2  items-center "
          >
            <span
              style={{ backgroundColor: color() }}
              className="block w-[18px] h-[18px] mr-2  rounded-full "
            ></span>
            {Cat}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
