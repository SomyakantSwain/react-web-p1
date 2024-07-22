import axios from "./axios";
import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const Context = (props) => {
  const [products, setproducts] = useState( 
    JSON.parse(localStorage.getItem("products")) ||null);

  // const getproduct = async () => {
  //   try {
  //     const { data } = await axios("/products");
  //    setproducts(data);
  //   } catch (error) {
  //     console.log("error");
  //   }
  // };
  // console.log(products);
  // useEffect(() => {
  //   getproduct();
  // }, []);

  return (
    <div>
      <ProductContext.Provider value={[products, setproducts ]}>
        {props.children}
      </ProductContext.Provider>
    </div>
  );
};

export default Context;
