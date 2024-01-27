import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";

import DashboardLayout from "../layout/DashboardLayout";

import Dashboard from "../dashboard/pages/home/Dashboard";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import CustomerList from "../dashboard/pages/customerManagement/CustomerList";
import DashboardProducts from "../dashboard/pages/products/Products";
import Orderlist from "../dashboard/pages/Orderlist/Orderlist";
import CustomerManagement from "../dashboard/pages/customerManagement/customerManagement";
import CustomerDetails from "../dashboard/pages/customerManagement/CustomerDetails";
import axios from "axios";
import ProductList from "../dashboard/pages/products/ProductList";
import DashboardProductDetails from "../dashboard/pages/products/ProductDetails";
import OrderManagement from "../dashboard/pages/Orderlist/OrderManagement";
import OrderDetails from "../dashboard/pages/Orderlist/OrderDetails";
import Products from "../pages/product/Products";
import Cart from "../pages/Cart/Cart";
import ProductDetail from "../pages/product/ProductDetail";
import PrivateRoute from "./PrivateRoute";
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
      {
        path: "products",
        element: (
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        ),
      },
      {
        path: "product-detail/:id",
        element: (
          <PrivateRoute>
            <ProductDetail />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const { data } = await axios.get("/products.json");
          const res = data.find((item) => item.id === Number(params.id));
          return res;
        },
      },
      {
        path: "cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "customer-management",
        element: (
          <PrivateRoute>
            <CustomerManagement />
          </PrivateRoute>
        ),
        children: [
          {
            index: true,
            element: <CustomerList />,
          },
          {
            path: "customer-details/:id",
            element: (
              <PrivateRoute>
                <CustomerDetails />
              </PrivateRoute>
            ),
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
        element: (
          <PrivateRoute>
            <DashboardProducts />
          </PrivateRoute>
        ),
        children: [
          {
            index: true,
            element: <ProductList />,
          },
          {
            path: "product-details/:id",
            element: (
              <PrivateRoute>
                <DashboardProductDetails />
              </PrivateRoute>
            ),
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
        element: (
          <PrivateRoute>
            <OrderManagement />
          </PrivateRoute>
        ),
        children: [
          {
            index: true,
            element: <Orderlist />,
          },
          {
            path: "order-details/:id",
            element: (
              <PrivateRoute>
                <OrderDetails />
              </PrivateRoute>
            ),
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
