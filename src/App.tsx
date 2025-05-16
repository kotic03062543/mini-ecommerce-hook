import Layout from "./components/Layout";
import AppRouter from "./routers/AppRouter";
import UserContextProvider from "./contexts/UserContext";

function App() {
  return (
    <>
      <UserContextProvider>
        {/* <Layout> */}
        <AppRouter />
        {/* </Layout> */}
      </UserContextProvider>
    </>
  );
}

export default App;
