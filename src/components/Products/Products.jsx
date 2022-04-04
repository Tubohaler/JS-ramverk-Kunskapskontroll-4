import React from "react";
import { useRecoilValue } from "recoil";

import Product from "./Product/Product";
import { productsState } from "../../stores/products/atom";

const Products = () => {
  const products = useRecoilValue(productsState);
  if (null) return <div>loading...</div>;
  return (
    <div>
      {products.map((product) => (
        <Product product={{ ...product }} key={product.title} />
      ))}
    </div>
  );
};

export default Products;
