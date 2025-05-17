import {
    createBrowserRouter,
} from "react-router";
import Home from "../pages/home/Home";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import ChooseMember from "../pages/auth/choose-member/ChooseMember";
import CreatorRegister from "../pages/auth/creator-register/CreatorRegister";
import CreatorLogin from "@/pages/auth/creator-login/CreatorLogin";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "choose-member",
                element: <ChooseMember />
            },
            {
                path: "creator-register",
                element: <CreatorRegister />
            },
            {
                path: "creator-login",
                element: <CreatorLogin />
            }
        ]
    },
]);