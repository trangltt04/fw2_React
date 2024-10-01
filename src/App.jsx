import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductAdd from "./components/ProductAdd";

function App() {
  // const [products, setProducts] = useState([]);
  // const [product, setProduct] = useState({});
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       setIsLoading(true);
  //       const response = await axios.get(`http://localhost:3000/products`);
  //       setProducts(response.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       setIsLoading(false);
  //       setError(error);
  //     }
  //   })();
  // }, []);

  //

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/add" element={<ProductAdd />} />
      </Routes>
    </>
  );
}

export default App;
