import Layout from "./components/Latout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <>
      <Layout>
        <AppRouter />
      </Layout>
    </>
  );
}

export default App;
