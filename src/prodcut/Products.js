import React, { useEffect, useState } from "react";
import productServiceInstance from "../service/ProductService";
import Button from "../Shared/Button";
import Card from "../Shared/Card";
export default function Products() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getproducts();
  }, []);

  const getproducts = async () => {
    try {
      const item = await productServiceInstance.fetchData();
      setProduct(item);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      console.warn("Api call done for fetch products !");
    }
  }

  return (
    <div className="container">
      <div className="row">
        <h2>This is api service</h2>
        {product?.map((item) => (
        
          <div className="col-md-3">
            <Card
              cardtitle={item.name}
              cardtext={item.email}
              cardId= {item.id}
              img={"https://www.w3schools.com/bootstrap5/img_avatar1.png"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
