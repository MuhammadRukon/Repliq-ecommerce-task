import React, { useEffect, useState } from "react";
import DashboardContainer from "../../../components/DashboardContainer";
import AddUserModal from "../../components/userManagement/AddUserModal";

const UserManagement = () => {
  const [users, setUsers] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // fetching payment data
  useEffect(() => {
    fetch("/users.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <DashboardContainer>
      <div className="text-right mr-1">
        <button
          onClick={() => setShowModal(true)}
          className=" mb-5 w-fit bg-[#407Bff] shadow-[5px_5px_7px_rgba(0,0,0,0.1)] px-3 py-1 rounded-md text-white "
        >
          + Add user
        </button>
      </div>
      <div className="md:max-w-[calc(100vw-375px)] overflow-scroll">
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
                status
              </th>
              <th className="px-4 lg:px-5 py-[15px] bg-[#0000000A] border-gray-200 text-[#666]  text-left text-sm capitalize font-normal">
                action
              </th>
            </tr>
          </thead>

          <tbody>
            {/* payment data row */}
            {users?.map((user) => (
              <tr key={user.id}>
                {/* id */}
                <td
                  className={`px-2 lg:px-5 py-[15px]  ${
                    user?.id % 2 === 0 ? "bg-[#00000005]" : "bg-white"
                  } border-gray-200 text-sm`}
                >
                  {user.id}
                </td>
                {/* name */}
                <td
                  className={`px-2 lg:px-5 py-[15px]  ${
                    user?.id % 2 === 0 ? "bg-[#00000005]" : "bg-white"
                  } border-gray-200 text-sm`}
                >
                  {user.name}
                </td>
                {/* number */}
                <td
                  className={`px-2 lg:px-5 py-[15px]  ${
                    user?.id % 2 === 0 ? "bg-[#00000005]" : "bg-white"
                  } border-gray-200 text-sm`}
                >
                  {user.number}
                </td>
                {/* email */}
                <td
                  className={`px-2 lg:px-5 py-[15px]  ${
                    user?.id % 2 === 0 ? "bg-[#00000005]" : "bg-white"
                  } border-gray-200 text-sm`}
                >
                  {user.email}
                </td>
                {/* status */}
                <td
                  className={`px-2 lg:px-5 py-[15px]  ${
                    user?.id % 2 === 0 ? "bg-[#00000005]" : "bg-white"
                  } border-gray-200 text-sm`}
                >
                  <p
                    className={` rounded-full w-fit text-white px-3 ${
                      user.status === "active" || user.status === "Active"
                        ? "bg-green-600"
                        : "bg-red-600"
                    }`}
                  >
                    {user.status}
                  </p>
                </td>
                {/* action */}
                <td
                  className={`px-2 lg:px-5 py-[15px]  ${
                    user?.id % 2 === 0 ? "bg-[#00000005]" : "bg-white"
                  } border-gray-200 text-sm`}
                >
                  action
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && <AddUserModal onClose={() => setShowModal(false)} />}
    </DashboardContainer>
  );
};

export default UserManagement;
