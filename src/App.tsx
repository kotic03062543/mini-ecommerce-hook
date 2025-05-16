import AppRouter from "./routers/AppRouter";
import UserContextProvider from "./contexts/UserContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <AppRouter />
      </UserContextProvider>
    </>
  );
}

export default App;
