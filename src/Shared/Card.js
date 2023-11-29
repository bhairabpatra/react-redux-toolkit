import React from "react";
import Button from "./Button";
import productServiceInstance from "../service/ProductService";
const Card = ({ img, cardtitle, cardtext,cardId }) => {

    const getproductsbyID = async (cardId) => {
        try {
          const item = await productServiceInstance.fetchDataById(cardId);
          console.log("product", item);
        } catch (error) {
          console.error("Error:", error);
        } finally {
          console.warn("Api call done for fetch single product!");
        }
      };

      const handleEdit =(id) =>{
            console.warn("this is test", id)
      }
  return (
    <>
      <div className="card">
        <img  src={img} alt="Card image" className="card-img-top" />
        <div className="card-body">
          <h4 className="card-title">{cardtitle}</h4>
          <p className="card-text">
            {cardtext}
          </p>
          <Button onEdit={() => getproductsbyID(cardId)} btnType="btn btn-primary btn-sm" btnLabel={"See Profile"} />
          <Button  onEdit={handleEdit} btnType="btn btn-danger btn-sm" btnLabel={"See Profile"} />
        </div>
      </div>
    </>
  );
};
export default Card;
