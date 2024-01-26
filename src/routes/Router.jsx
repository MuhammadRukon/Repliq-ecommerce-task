import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";

import DashboardLayout from "../layout/DashboardLayout";

import Dashboard from "../dashboard/pages/home/Dashboard";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import CustomerList from "../dashboard/pages/customerManagement/CustomerList";
import Products from "../dashboard/pages/products/Products";
import Orderlist from "../dashboard/pages/Orderlist/Orderlist";
import CustomerManagement from "../dashboard/pages/customerManagement/customerManagement";
import CustomerDetails from "../dashboard/pages/customerManagement/CustomerDetails";
import axios from "axios";
import ProductList from "../dashboard/pages/products/ProductList";
import ProductDetails from "../dashboard/pages/products/ProductDetails";
import OrderManagement from "../dashboard/pages/Orderlist/OrderManagement";
import OrderDetails from "../dashboard/pages/Orderlist/OrderDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "customer-management",
        element: <CustomerManagement />,
        children: [
          {
            index: true,
            element: <CustomerList />,
          },
          {
            path: "customer-details/:id",
            element: <CustomerDetails />,
            loader: async ({ params }) => {
              const { data } = await axios.get("/customer.json");
              const res = data.find((item) => item.id === Number(params.id));
              return res;
            },
          },
        ],
      },
      {
        path: "products",
        element: <Products />,
        children: [
          {
            index: true,
            element: <ProductList />,
          },
          {
            path: "product-details/:id",
            element: <ProductDetails />,
            loader: async ({ params }) => {
              const { data } = await axios.get("/products.json");
              const res = data.find((item) => item.id === Number(params.id));
              return res;
            },
          },
        ],
      },
      {
        path: "order-management",
        element: <OrderManagement />,
        children: [
          {
            index: true,
            element: <Orderlist />,
          },
          {
            path: "order-details/:id",
            element: <OrderDetails />,
            loader: async ({ params }) => {
              const { data } = await axios.get("/products.json");
              const res = data.find((item) => item.id === Number(params.id));
              return res;
            },
          },
        ],
      },
    ],
  },
]);
