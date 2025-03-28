import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import AppLayout from "./layout/app-layout";
import LandingPage from "./pages/landing";
import Onboarding from "./pages/onboarding";
import Jobs from "./pages/job";
import Postjobs from "./pages/postjobs";
import Savejobs from "./pages/savejobs";
import JobListing from "./pages/jobListing";
import { ThemeProvider } from "./components/ui/theme-provider";
import ProtectedRoute from "./components/ui/protectedRoute";

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

        element: (
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        ),
      },

      {
        path: "/jobs",
        element: (
          <ProtectedRoute>
            <Jobs />,
          </ProtectedRoute>
        ),
      },

      {
        path: "/jobs{id}",
        element: (
          <ProtectedRoute>
            <JobListing />,
          </ProtectedRoute>
        ),
      },

      {
        path: "/postjobs",
        element: (
          <ProtectedRoute>
            <Postjobs />,
          </ProtectedRoute>
        ),
      },

      {
        path: "/savedjobs",
        element: (
          <ProtectedRoute>
            <Savejobs />,
          </ProtectedRoute>
        ),
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
