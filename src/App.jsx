import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import AppLayout from "./layout/app-layout";
import LandingPage from "./pages/landing";
import Onboarding from "./pages/onborading";
import Jobs from "./pages/job";
import Postjobs from "./pages/postjobs";
import Savejobs from "./pages/savejobs";
import JobListing from "./pages/jobListing";
import { ThemeProvider } from "./components/ui/theme-provider";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: <Onboarding />,
      },

      {
        path: "/jobs",
        element: <Jobs />,
      },

      {
        path: "/jobs{id}",
        element: <JobListing />,
      },

      {
        path: "/postjobs",
        element: <Postjobs />,
      },

      {
        path: "/savedjobs",
        element: <Savejobs />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />;
    </ThemeProvider>
  );
}

export default App;
