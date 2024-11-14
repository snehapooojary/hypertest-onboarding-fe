import { Outlet, type RouteObject } from "react-router-dom";
import { NavigationManager } from "../components/NavigationManager";
import Homepage from "../pages/landing-page";
import LandingPage from "../pages/landingPage";
import SignUp from "../pages/signup-page";
import Onboarding from "../pages/onboarding-page/index";
import NewSignUp from "../pages/signupPage/index";
import Suite from "../pages/Suite/index";
import Info from '../pages/Info/index';
import Register from '../pages/Register/index';
import Layout from "./layout";
import InviteRegistration from "../pages/invite-registration";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <NavigationManager>
        <Layout showTopNavBar={true} />
      </NavigationManager>
    ),
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "sign-up",
        element: <NewSignUp />,
      },
      {
        path: "welcome",
        element: <Onboarding />,
      },
      {
        path: "suite",
        element: <Suite />,
      },
      {
        path: "info",
        element: <Info />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "invitation",
        element: <InviteRegistration />,
      }
    ],
  },
];
