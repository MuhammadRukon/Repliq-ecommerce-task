import React, { useEffect, useState } from "react";
import DashboardContainer from "../../../components/DashboardContainer";
import axios from "axios";
import { Link } from "react-router-dom";

const Orderlist = () => {
  const [orders, setOrders] = useState(null);

  // fetch order Data
  useEffect(() => {
    axios.get("/products.json").then(({ data }) => setOrders(data));
  }, []);
  return (
    <DashboardContainer>
      <div className="md:max-w-[calc(100vw-375px)] overflow-x-auto">
        <table className="w-full">
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
                total price
              </th>
              <th className="px-4 lg:px-5 py-[15px] bg-[#0000000A] border-gray-200 text-[#666]  text-left text-sm capitalize font-normal">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {/* payment data row */}
            {orders?.map((order) => (
              <tr key={order.id}>
                {/* id */}
                <td
                  className={`px-2 lg:px-5 py-[15px]  ${
                    order?.id % 2 === 0 ? "bg-[#00000005]" : "bg-white"
                  } border-gray-200 text-sm`}
                >
                  {order.id}
                </td>
                {/* name */}
                <td
                  className={`px-2 lg:px-5 py-[15px]  ${
                    order?.id % 2 === 0 ? "bg-[#00000005]" : "bg-white"
                  } border-gray-200 text-sm`}
                >
                  {order.name}
                </td>
                {/* price */}
                <td
                  className={`px-2 lg:px-5 py-[15px]  ${
                    order?.id % 2 === 0 ? "bg-[#00000005]" : "bg-white"
                  } border-gray-200 text-sm`}
                >
                  {order.price}
                </td>
                {/* company */}
                <td
                  className={`px-2 lg:px-5 py-[15px]  ${
                    order?.id % 2 === 0 ? "bg-[#00000005]" : "bg-white"
                  } border-gray-200 text-sm`}
                >
                  {order.company}
                </td>
                {/* quantity */}
                <td
                  className={`px-2 lg:px-5 py-[15px]  ${
                    order?.id % 2 === 0 ? "bg-[#00000005]" : "bg-white"
                  } border-gray-200 text-sm`}
                >
                  {order.quantity}
                </td>
                {/* total price */}
                <td
                  className={`px-2 lg:px-5 py-[15px]  ${
                    order?.id % 2 === 0 ? "bg-[#00000005]" : "bg-white"
                  } border-gray-200 text-sm`}
                >
                  {order.quantity * order.price}
                </td>
                {/* action */}
                <td
                  className={`px-2 lg:px-5 py-[15px]  ${
                    order?.id % 2 === 0 ? "bg-[#00000005]" : "bg-white"
                  } border-gray-200 text-sm`}
                >
                  <Link
                    to={`order-details/${order?.id}`}
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
    </DashboardContainer>
  );
};

export default Orderlist;
