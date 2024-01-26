import { useLoaderData } from "react-router-dom";
import DashboardContainer from "../../../components/DashboardContainer";

const ProductDetails = () => {
  const data = useLoaderData();
  return (
    <DashboardContainer>
      <h2 className="text-2xl font-bold">#{data.id}</h2>
      <p>
        <span className="text-xl font-bold">Product's name: </span>
        {data.name}
      </p>
      <p>
        <span className="text-xl font-bold">Product's price: </span>
        {data.price}$
      </p>
      <p>
        <span className="text-xl font-bold">Product's Brand: </span>
        {data.company}
      </p>
      <p>
        <span className="text-xl font-bold">Product's Quantity: </span>
        {data.quantity}pc/s
      </p>
    </DashboardContainer>
  );
};

export default ProductDetails;
