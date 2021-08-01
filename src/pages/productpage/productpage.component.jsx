import React from "react";

const ProductPage = ({ match }) => {
  console.log(match);
  return <div>{match.url}</div>;
};

export default ProductPage;
