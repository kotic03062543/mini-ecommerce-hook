import AppRouter from "./routers/AppRouter";
import UserContextProvider from "./contexts/UserContext";
import CartContextProvider from "./contexts/CartContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <CartContextProvider>
          <AppRouter />
        </CartContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
