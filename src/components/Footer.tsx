function Footer() {
  return (
    <footer className="bg-white text-center shadow-2xl h-[100px]">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2025{" "}
          <a href="/" className="hover:underline text-blue-300">
            KK™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap justify-center items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
          <li>
            <a href="/" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="Contract" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
