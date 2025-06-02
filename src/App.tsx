import AppRouter from "./routers/AppRouter";
import UserContextProvider from "./contexts/UserContext";
import CartContextProvider from "./contexts/CartContext";

function App() {
  return (
    <>
      <CartContextProvider>
        <UserContextProvider>
          <AppRouter />
        </UserContextProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
