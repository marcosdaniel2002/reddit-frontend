import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import AppLayout from "./ui/AppLayout";
import Discover from "./features/discover/Discover";
import Login from "./features/authentication/Login";
import ProtectedRoute from "./ui/ProtectedRoute";

import Settings from "./features/settings/Settings";
import Account from "./features/settings/account/Account";
import Privacy from "./features/settings/privacy/Privacy";
import Feed from "./features/settings/feed/Feed";
import Notifications from "./features/settings/notifications/Notifications";
import Emails from "./features/settings/emails/Emails";
import Premium from "./features/settings/premium/Premium";
import Messaging from "./features/settings/messaging/Messaging";

import Post from "./features/Post/Post";

const router = createBrowserRouter([
  {
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <Discover />,
      },
      {
        element: <Settings />,
        children: [
          {
            path: "/settings/account",
            element: <Account />,
          },
          {
            path: "/settings/privacy",
            element: <Privacy />,
          },
          {
            path: "/settings/feed",
            element: <Feed />,
          },
          {
            path: "/settings/notifications",
            element: <Notifications />,
          },
          {
            path: "/settings/emails",
            element: <Emails />,
          },
          {
            path: "/settings/premium",
            element: <Premium />,
          },
          {
            path: "/settings/messaging",
            element: <Messaging />,
          },
        ],
      },
      {
        element: <Post />,
        path: "/post",
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{
          margin: "8px",
        }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#f9fafb",
            color: "#374151",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
