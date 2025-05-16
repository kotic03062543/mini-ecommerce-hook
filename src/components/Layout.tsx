import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
