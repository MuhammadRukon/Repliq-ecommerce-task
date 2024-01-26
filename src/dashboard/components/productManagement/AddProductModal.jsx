import React from "react";

const AddProductModal = ({ onClose }) => {
  // handle user file
  const handleAddProduct = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const company = e.target.company.value;
    const quantity = e.target.number.value;
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center">
      <form
        onSubmit={handleAddProduct}
        className="bg-white mx-8 rounded-md pt-5 pb-6 px-5"
      >
        <h2 className="text-center font-bold text-xl text-[#4d4d4d]">
          Add Product
        </h2>
        <div className="flex mt-4 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className=" focus:outline-none p-3 border-gray-300 rounded-md h-10 border w-full"
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className=" focus:outline-none p-3 border-gray-300 rounded-md h-10 border w-full"
          />
        </div>
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          className="mt-4 focus:outline-none p-3 border-gray-300 rounded-md h-10 border w-full"
        />
        {/* action button */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            className="px-3 py-1 bg-[#407Bff] rounded-md text-white"
            type="submit"
          >
            Add
          </button>
          <button
            type="button"
            className="px-3 py-1 bg-slate-400 rounded-md text-white"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductModal;
