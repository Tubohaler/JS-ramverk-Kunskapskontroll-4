import React from "react";
import { useRecoilValue } from "recoil";

import Product from "./Product/Product";
import { productState } from "../../stores/products/atom";

const Products = () => {
  const products = useRecoilValue(productState);
  if (!products) return <div>loading...</div>;
  return (
    <div>
      {products.map((product) => (
        <Product product={{ ...product }} key={product.title} />

        // <div key={product.title}>
        //   <img src={product.image} alt="" />
        //   <h3>{product.title}</h3>
        // </div>
      ))}
    </div>

    // <main>
    //   <div />
    //   <Grid
    //     container
    //     spacing={4}
    //     direction="row"
    //     justifyContent="center"
    //     alignItems="center"
    //   >
    //     {products.map((product) => (
    //       <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
    //         <Product product={product} onAddToCart={onAddToCart} />
    //       </Grid>
    //     ))}
    //   </Grid>
    // </main>
  );
};

export default Products;
