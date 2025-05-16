function Catagorie() {
  return (
    <div className="flex flex-col items-center justify-start bg-gray-100 p-10 gap-10">
      <div className="text-center flex flex-col gap-3">
        <h1 className="text-3xl font-bold">Browsw The Range</h1>
        <p className="text-lg">Find the perfect product for you.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        <div className="flex flex-col items-center gap-3">
          <img
            className="max-w-[350px] h-100 object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <p className="font-bold text-xl">Diving</p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <img
            className="max-w-[350px] h-100 object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <p className="font-bold text-xl">Diving</p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <img
            className="max-w-[350px] h-100 object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <p className="font-bold text-xl">Diving</p>
        </div>
      </div>
    </div>
  );
}

export default Catagorie;
