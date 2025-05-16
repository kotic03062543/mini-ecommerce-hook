import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Latout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}

export default Latout;
