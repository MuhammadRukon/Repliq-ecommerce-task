import React, { useEffect, useState } from "react";
import DashboardContainer from "../../../components/DashboardContainer";
import AddCustomerModal from "../../components/customerManagement/AddCustomerModal";
import axios from "axios";
import { Link } from "react-router-dom";

const CustomerList = () => {
  const [customers, setCustomers] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // fetch customer Data
  useEffect(() => {
    axios.get("/customer.json").then(({ data }) => setCustomers(data));
  }, []);
  return (
    <DashboardContainer>
      <div className="text-right mr-1">
        <button
          onClick={() => setShowModal(true)}
          className=" mb-5 w-fit bg-[#48B7E9] shadow-[5px_5px_7px_rgba(0,0,0,0.1)] px-3 py-1 rounded-md text-white "
        >
          + Add customer
        </button>
      </div>
      <div className="md:max-w-[calc(100vw-375px)] overflow-x-auto">
        <table className="w-full">
          {/* payment table head */}
          <thead>
            <tr>
              <th className="px-4 lg:px-5 py-[15px] bg-[#0000000A] border-gray-200 text-[#666]  text-left text-sm capitalize font-normal">
                id
              </th>
              <th className="px-4 lg:px-5 py-[15px] bg-[#0000000A] border-gray-200 text-[#666]  text-left text-sm capitalize font-normal">
                name
              </th>
              <th className="px-4 lg:px-5 py-[15px] bg-[#0000000A] border-gray-200 text-[#666]  text-left text-sm capitalize font-normal">
                mobile
              </th>
              <th className="px-4 lg:px-5 py-[15px] bg-[#0000000A] border-gray-200 text-[#666]  text-left text-sm capitalize font-normal">
                email
              </th>
              <th className="px-4 lg:px-5 py-[15px] bg-[#0000000A] border-gray-200 text-[#666]  text-left text-sm capitalize font-normal">
                action
              </th>
            </tr>
          </thead>

          <tbody>
            {/* payment data row */}
            {customers?.map((customer) => (
              <tr key={customer.id}>
                {/* id */}
                <td
                  className={`px-2 lg:px-5 py-[15px]  ${
                    customer?.id % 2 === 0 ? "bg-[#00000005]" : "bg-white"
                  } border-gray-200 text-sm`}
                >
                  {customer.id}
                </td>
                {/* name */}
                <td
                  className={`px-2 lg:px-5 py-[15px]  ${
                    customer?.id % 2 === 0 ? "bg-[#00000005]" : "bg-white"
                  } border-gray-200 text-sm`}
                >
                  {customer.name}
                </td>
                {/* number */}
                <td
                  className={`px-2 lg:px-5 py-[15px]  ${
                    customer?.id % 2 === 0 ? "bg-[#00000005]" : "bg-white"
                  } border-gray-200 text-sm`}
                >
                  {customer.number}
                </td>
                {/* email */}
                <td
                  className={`px-2 lg:px-5 py-[15px]  ${
                    customer?.id % 2 === 0 ? "bg-[#00000005]" : "bg-white"
                  } border-gray-200 text-sm`}
                >
                  {customer.email}
                </td>
                {/* action */}
                <td
                  className={`px-2 lg:px-5 py-[15px]  ${
                    customer?.id % 2 === 0 ? "bg-[#00000005]" : "bg-white"
                  } border-gray-200 text-sm`}
                >
                  <Link
                    to={`customer-details/${customer?.id}`}
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
      {showModal && (
        <AddCustomerModal
          data={customers}
          setData={setCustomers}
          onClose={() => setShowModal(false)}
        />
      )}
    </DashboardContainer>
  );
};

export default CustomerList;
