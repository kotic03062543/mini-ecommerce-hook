import { Link } from "react-router-dom";

function Products() {
  const products = [
    {
      id: 1,
      name: "Syltherine",
      detail: "Syltherine cafe chaire",
      price: 100,
      img: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Lotito",
      detail: "Luxury big sofa",
      price: 200,
      img: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Respira",
      detail: "Outdoor bar table",
      price: 300,
      img: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Grifo",
      detail: "Outdoor bar table",
      price: 350,
      img: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Potty",
      detail: "Outdoor bar table",
      price: 500,
      img: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Potty",
      detail: "Outdoor bar table",
      price: 500,
      img: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Potty",
      detail: "Outdoor bar table",
      price: 500,
      img: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "Muggo",
      detail: "Outdoor bar table",
      price: 500,
      img: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-start bg-white p-10 gap-10">
      <div className="text-center flex flex-col gap-3">
        <h1 className="text-3xl font-bold">Our Products</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {products.map((p) => (
          <Link
            key={p.id}
            to={`/ProductDetail/${p.id}`}
            className="flex flex-col items-center bg-gray-200"
          >
            <img
              className="max-w-[300px] h-80 object-cover"
              src={p.img}
              alt=""
            />
            <div className="w-full flex flex-col p-3 items-start">
              <p className="font-bold text-xl">{p.name}</p>
              <p>{p.detail}</p>
              <p>
                Price : <span className="text-xl text-red-600">{p.price}</span>{" "}
                $
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
