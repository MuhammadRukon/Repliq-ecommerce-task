import { useEffect, useState } from "react";
import Container from "../../components/Container";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  //   fetch products
  useEffect(() => {
    axios("/products.json").then(({ data }) => setProducts(data));
  }, []);
  return (
    <Container>
      <div>
        <h2 className="mt-20 font-bold text-center text-3xl lg:text-5xl font-robotoCondensed">
          Products
        </h2>
        <div className="grid text-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 px-5 2xl:px-0">
          {products?.map((prod) => (
            <div
              key={prod.index}
              className="hover:scale-110 transition-all border-2 p-6"
            >
              <div className="">
                <h2 className="">{prod.name}</h2>
                <p>{prod.price}$</p>
                <p>{prod.quantity}x</p>
                <p>{prod.company}</p>
                <div className=" justify-start mt-5">
                  <Link
                    to={`/product-detail/${prod.id}`}
                    className="bg-[#48B7E9] p-1 px-3 rounded-md shadow-md text-white"
                  >
                    view details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Products;
