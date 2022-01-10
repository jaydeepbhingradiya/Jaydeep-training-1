import React, { useContext } from "react";
import { ProductsContext } from "../context/products-context";
import FavoriteItem from "../components/Favorites/FavoriteItem";
import "./Products.css";

const Favorites = (props) => {
  const { id, title, description } = props;
  const favoriteProducts = useContext(ProductsContext).products.filter(
    (p) => p.isFavorite
  );
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map((prod) => (
          <FavoriteItem
            key={id}
            id={id}
            title={title}
            description={description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
