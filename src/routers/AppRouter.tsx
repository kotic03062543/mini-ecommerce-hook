import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import About from "../pages/About";
import ProductDetail from "../pages/ProductDetail";
import Layout from "../components/Layout";

function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route path="/About" element={<About />} />
      <Route path="/ProductDetail/:id" element={<ProductDetail />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRouter;
