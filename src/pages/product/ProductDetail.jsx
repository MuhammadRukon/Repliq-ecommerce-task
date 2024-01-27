import React from "react";
import Container from "../../components/Container";
import { useLoaderData } from "react-router-dom";

const ProductDetail = () => {
  const data = useLoaderData();
  return (
    <Container>
      <div>
        <h2 className="mt-20 font-bold text-center text-3xl lg:text-5xl font-robotoCondensed">
          Detail of #{data.id} product
        </h2>
        <div className="hover:scale-110 mt-10 text-center transition-all border-2 p-6">
          <div className="">
            <h2 className="">{data.name}</h2>
            <p>{data.price}$</p>
            <p>{data.quantity}x</p>
            <p>{data.company}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
