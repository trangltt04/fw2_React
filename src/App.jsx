import { Route, Routes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import AddProduct from "./pages/AddProduct";
import Dashboard from "./pages/Dashboard";
import ProductManagement from "./pages/ProductManagement";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/add" element={<ProductAdd />} />
        <Route path="/products/product-edit/:id" element={<ProductEdit />} /> */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<ProductManagement />} />
          <Route path="products/add" element={<AddProduct />} />
          {/* <Route path="register" element={<register />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
