import { useEffect, useState } from "react";
import Container from "../../components/Container";
import axios from "axios";

const Cart = () => {
  const [cart, setCart] = useState([]);
  console.log(cart);
  //   fetch Cart
  useEffect(() => {
    axios("/products.json").then(({ data }) => setCart(data));
  }, []);
  //   handleDelete
  const handleDelete = (id) => {
    const filtered = cart.filter((item) => item.id !== id);
    setCart(filtered);
  };
  return (
    <Container>
      <div>
        <h2 className="mt-20 font-bold text-center text-3xl lg:text-5xl font-robotoCondensed">
          Cart
        </h2>
        <div className="grid text-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 px-5 2xl:px-0">
          {cart?.map((prod) => (
            <div
              key={prod.index}
              className="hover:scale-110 transition-all border-2 p-6"
            >
              <div>
                <h2 className="">{prod.name}</h2>
                <p>{prod.price}$</p>
                <p>{prod.quantity}x</p>
                <p>{prod.company}</p>
                <div className=" justify-start mt-5">
                  <button
                    onClick={() => handleDelete(prod.id)}
                    className="bg-red-500 p-1 px-3 rounded-md shadow-md text-white"
                  >
                    delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Cart;
