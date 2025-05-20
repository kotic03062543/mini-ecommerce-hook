import Navbar from "./Navbar";
import Footer from "./Footer";

import type { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
