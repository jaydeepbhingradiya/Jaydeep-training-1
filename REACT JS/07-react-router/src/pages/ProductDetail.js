import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const params = useParams();
  return (
    <section>
      <h1>product detail</h1>
      <p>{params.productId}</p>
    </section>
  );
}

export default ProductDetail;
