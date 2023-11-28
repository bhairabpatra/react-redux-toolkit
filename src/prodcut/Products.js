import React, { useEffect, useState } from "react";
import productServiceInstance from "../service/ProductService";

export default function Products() {
  const [product, setProduct] = useState([]);
  
  useEffect(() => {
    getproducts();
  }, []);

  const getproducts = async () => {
    try{
        const item = await productServiceInstance.fetchData();
    setProduct(item);

    }catch(error){
        console.error('Error:', error);
    }finally{
        console.warn('Api call done for fetch products !');
    }
    
  };

  const getproductsbyID = async (id) => {
    try{
        const item = await productServiceInstance.fetchDataById(id);
        console.log("product", item)
        
    }catch(error){
        console.error('Error:', error);
    }finally{
        console.warn('Api call done for fetch single product!');
    }
    
  };

  return (
    <div>
      <h2>This is api service</h2>
      {product?.map((item) => (
        <li key={item.id}>
          {item.id}
          {item.name}
          <button onClick={() => getproductsbyID(item.id)}>
            Get PRodcut by Id
          </button>
        </li>
      ))}
    </div>
  );
}
