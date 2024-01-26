import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import LoginForm from "../pages/login/LoginForm";

import DashboardLayout from "../layout/DashboardLayout";

import Dashboard from "../dashboard/pages/home/Dashboard";
import UserManagement from "../dashboard/pages/userManagement/UserManagement";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";

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
        path: "user-management",
        element: <UserManagement />,
      },
    ],
  },
]);
