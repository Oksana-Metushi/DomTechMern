import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/menuPage/Menu";
import Signup from "../components/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import CartPage from "../pages/menuPage/CartPage";
import Login from "../components/Login";
import Order from "../pages/dashboard/user/Order";
import UserProfile from "../pages/dashboard/user/UserProfile";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/dashboard/admin/Dashboard";
import Users from "../pages/dashboard/admin/Users";
import AddMenu from "../pages/dashboard/admin/AddMenu";
import ManageItems from "../pages/dashboard/admin/ManageItems";
import UpdateMenu from "../pages/dashboard/admin/UpdateMenu";
import Payment from "../pages/menuPage/Payment";
import ManageBookings from "../pages/dashboard/admin/ManageBookings";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import BlogItems from "../pages/blog/BlogItems";
import ManageBlog from "../pages/dashboard/admin/ManageBlog";
import AddBlog from "../pages/dashboard/admin/AddBlog";
import UpdateBlog from "../pages/dashboard/admin/UdateBlog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/menu",
          element: <Menu/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/blog",
          element: <BlogItems/>
        },
        {
          path: "/order",
          element:<PrivateRoute><Order/></PrivateRoute>
        },
        {
          path: "/update-profile",
          element: <UserProfile/>
        },
        {
          path: "/cart-page",
          element: <CartPage/>
        },
        {
          path: "/process-checkout",
          element: <Payment/>
        }
      ]
    },
    {
      path: "/signup",
      element: <Signup/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
      children: [
        {
          path: '',
          element: <Dashboard/>
        },
        {
          path: 'users',
          element: <Users/>
        },
        {
          path: 'add-menu',
          element: <AddMenu/>
        },
        {
          path: 'manage-items',
          element: <ManageItems/>
        },
        {
          path: 'add-blog',
          element: <AddBlog/>
        },
        {
          path: 'manage-blog',
          element: <ManageBlog/>
        },
        {
          path: 'update-menu/:id',
          element: <UpdateMenu/>,
          loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
        },
        {
          path: 'update-blog/:id',
          element: <UpdateBlog/>,
          loader: ({ params }) => fetch(`http://localhost:5000/blog/${params.id}`)
        },
        {
          path: 'bookings',
          element: <ManageBookings/>
        }
      ]
    }
  ]);

  export default router;