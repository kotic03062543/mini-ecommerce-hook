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
      <Route
        path="/About"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/ProductDetail/:id"
        element={
          <Layout>
            <ProductDetail />
          </Layout>
        }
      />
      <Route
        path="*"
        element={
          <Layout>
            <PageNotFound />
          </Layout>
        }
      />
    </Routes>
  );
}

export default AppRouter;
