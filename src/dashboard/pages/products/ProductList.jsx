import { useEffect, useState } from "react";
import DashboardContainer from "../../../components/DashboardContainer";
import AddProductModal from "../../components/productManagement/AddProductModal";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState(null);
  const [showModal, setShowModal] = useState(false);
  console.log(products);
  //   fetch products
  useEffect(() => {
    axios("/products.json").then(({ data }) => setProducts(data));
  }, []);
  return (
    <DashboardContainer>
      <div className="text-right mr-1">
        <button
          onClick={() => setShowModal(true)}
          className=" mb-5 w-fit bg-[#48B7E9] shadow-[5px_5px_7px_rgba(0,0,0,0.1)] px-3 py-1 rounded-md text-white "
        >
          + Add Product
        </button>
      </div>
      <div className="md:max-w-[calc(100vw-375px)] overflow-x-auto">
        <table className="w-full">
          {/* product table head */}
          <thead>
            <tr>
              <th className="px-4 lg:px-5 py-[15px] bg-[#0000000A] border-gray-200 text-[#666]  text-left text-sm capitalize font-normal">
                id
              </th>
              <th className="px-4 lg:px-5 py-[15px] bg-[#0000000A] border-gray-200 text-[#666]  text-left text-sm capitalize font-normal">
                name
              </th>
              <th className="px-4 lg:px-5 py-[15px] bg-[#0000000A] border-gray-200 text-[#666]  text-left text-sm capitalize font-normal">
                price
              </th>
              <th className="px-4 lg:px-5 py-[15px] bg-[#0000000A] border-gray-200 text-[#666]  text-left text-sm capitalize font-normal">
                brand
              </th>
              <th className="px-4 lg:px-5 py-[15px] bg-[#0000000A] border-gray-200 text-[#666]  text-left text-sm capitalize font-normal">
                quantity
              </th>
              <th className="px-4 lg:px-5 py-[15px] bg-[#0000000A] border-gray-200 text-[#666]  text-left text-sm capitalize font-normal">
                action
              </th>
            </tr>
          </thead>

          <tbody>
            {/* product data row */}
            {products?.map((product) => (
              <tr key={product.id}>
                {/* id */}
                <td
                  className={`px-2 lg:px-5 py-[15px]  ${
                    product?.id % 2 === 0 ? "bg-[#00000005]" : "bg-white"
                  } border-gray-200 text-sm`}
                >
                  {product.id}
                </td>
                {/* name */}
                <td
                  className={`px-2 lg:px-5 py-[15px]  ${
                    product?.id % 2 === 0 ? "bg-[#00000005]" : "bg-white"
                  } border-gray-200 text-sm`}
                >
                  {product.name}
                </td>
                {/* price */}
                <td
                  className={`px-2 lg:px-5 py-[15px]  ${
                    product?.id % 2 === 0 ? "bg-[#00000005]" : "bg-white"
                  } border-gray-200 text-sm`}
                >
                  {product.price}
                </td>
                {/* company */}
                <td
                  className={`px-2 lg:px-5 py-[15px]  ${
                    product?.id % 2 === 0 ? "bg-[#00000005]" : "bg-white"
                  } border-gray-200 text-sm`}
                >
                  {product.company}
                </td>
                {/* quantity */}
                <td
                  className={`px-2 lg:px-5 py-[15px]  ${
                    product?.id % 2 === 0 ? "bg-[#00000005]" : "bg-white"
                  } border-gray-200 text-sm`}
                >
                  {product.quantity}
                </td>
                {/* action */}
                <td
                  className={`px-2 lg:px-5 py-[15px]  ${
                    product?.id % 2 === 0 ? "bg-[#00000005]" : "bg-white"
                  } border-gray-200 text-sm`}
                >
                  <Link
                    to={`product-details/${product?.id}`}
                    className="rounded-md w-fit text-white px-3 bg-[#48B7E9]"
                  >
                    view
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && <AddProductModal onClose={() => setShowModal(false)} />}
    </DashboardContainer>
  );
};

export default ProductList;
