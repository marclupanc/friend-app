import React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./app";
import Layout from "./app/Layout.tsx";
import { AddFriend } from "./pages/AddFriend";
import { EditFriend } from "./pages/EditFriend";
import { FriendsDetails } from "./pages/FriendsDetalis";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor, store } from "./shared/store/store.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/friends" />,
  },
  {
    path: "/friends",
    element: <App />,
  },
  {
    path: "/friends/:id",
    element: <FriendsDetails />,
  },
  {
    path: "/friends/new",
    element: <AddFriend />,
  },
  {
    path: "/friends/:id/edit",
    element: <EditFriend />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </Layout>
  </React.StrictMode>
);
