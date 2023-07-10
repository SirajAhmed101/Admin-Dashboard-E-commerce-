import React from "react";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UpdateProductContext } from "../Context/UpdateProductContext";
import { ProductContext } from "../Context/ProductContext";

const UpdateProduct = () => {
  const { updateFormData, setUpdateFormData } =
    useContext(UpdateProductContext);

  const {
    id,
    name,
    sales,
    price,
    category,
    stock,
    description,
    src,
    file,
    status,
  } = updateFormData;

  const { productsData, setProductsData } = useContext(ProductContext);

  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;

    setUpdateFormData((prevFromData) => {
      return {
        ...prevFromData,
        [name]: value,
      };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const checkID = productsData.find((item) => {
      return item.id === updateFormData.id;
    });

    setProductsData([
      ...productsData,
      {
        id,
        name,
        sales,
        price,
        category,
        stock,
        description,
        src,
        file,
        status,
      },
    ]);
  }

  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="mt-14 flex justify-between text-3xl font-bold">
          <h1>Products</h1>
          <button
            type="button"
            className="mb-2 mr-2 rounded-lg bg-green-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-900 focus:outline-none"
            onClick={() => navigate("/product")}
          >
            Go to Products
          </button>
        </div>
        <div className="add-products">
          <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-2xl px-4 py-8 lg:py-16">
              <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                Update Products
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Product Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={updateFormData.name}
                      onChange={handleChange}
                      id="name"
                      className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                      placeholder="Type product name"
                      required=""
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="brand"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Sales
                    </label>
                    <input
                      type="number"
                      name="sales"
                      value={updateFormData.sales}
                      onChange={handleChange}
                      id="sales"
                      className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                      placeholder="Total Sale"
                      required=""
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="price"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      value={updateFormData.price}
                      onChange={handleChange}
                      id="price"
                      className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                      placeholder="$2999"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="category"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Category
                    </label>
                    <select
                      id="category"
                      className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                      name="category"
                      value={updateFormData.category}
                      onChange={handleChange}
                    >
                      <option defaultValue="">Select category</option>
                      <option value="Clothes">Clothes</option>
                      <option value="Grocery">Grocery</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Laptos">Laptos</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="stock"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Stock
                    </label>
                    <input
                      type="number"
                      name="stock"
                      value={updateFormData.stock}
                      onChange={handleChange}
                      id="stock"
                      className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                      placeholder={12}
                      required=""
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="description"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={updateFormData.description}
                      onChange={handleChange}
                      rows={8}
                      className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                      placeholder="Your description here"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Images
                    </label>
                    <input
                      type="text"
                      name="src"
                      value={updateFormData.src}
                      onChange={handleChange}
                      id="name"
                      className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                      placeholder="Enter Image URL"
                      required=""
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="status"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Status
                    </label>
                    <select
                      id="category"
                      className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-5 block w-[50%] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                      name="status"
                      value={updateFormData.status}
                      onChange={handleChange}
                    >
                      <option defaultValue="">Select Status</option>
                      <option value="Active">Active</option>
                      <option value="Deactived  ">Deactived</option>
                    </select>

                    <input
                      type="file"
                      name="file"
                      id="name"
                      required=""
                      value={updateFormData.file}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <button className=" hover:bg-primary-800 mt-4 inline-flex items-center rounded-lg bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white  sm:mt-6">
                    Update
                  </button>
                  <button className=" hover:bg-primary-800 mt-4 inline-flex items-center rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white sm:mt-6">
                    Clear
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default UpdateProduct;
