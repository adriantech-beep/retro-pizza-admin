import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./components/PageNotFound";

import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./components/AdminLayout";
import AddProduct from "./pages/AddProduct";
import Products from "./pages/Products";
import UsersPage from "./pages/UsersPage";
import Signup from "./pages/Signup";
import TrashItems from "./pages/TrashItems";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="products" element={<Products />} />
            <Route
              path="/products/delete/:id"
              element={<Products showDeleteModal />}
            />
            <Route path="users" element={<UsersPage />} />
            <Route
              path="/users/delete/:id"
              element={<UsersPage showDeleteModal />}
            />
            <Route path="/trash" element={<TrashItems />} />
            <Route
              path="/products/:id/soft-delete"
              element={<Products showDeleteModal />}
            />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark" // or "light"
          className="z-50"
        />
      </HashRouter>
    </QueryClientProvider>
  );
}

export default App;
