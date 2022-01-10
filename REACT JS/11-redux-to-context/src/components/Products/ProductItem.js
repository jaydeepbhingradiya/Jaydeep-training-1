import React, { useContext } from "react";
import Card from "../UI/Card";
import "./ProductItem.css";
import { ProductsContext } from "../../context/products-context";

const ProductItem = (props) => {
  const { id, isFav, title, description } = props;
  const toggleFavctx = useContext(ProductsContext).toggleFav;
  const toggleFavHandler = () => {
    toggleFavctx(id);
  };

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={isFav ? "is-fav" : ""}>{title}</h2>
        <p>{description}</p>
        <button
          className={!isFav ? "button-outline" : ""}
          onClick={toggleFavHandler}
        >
          {isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
