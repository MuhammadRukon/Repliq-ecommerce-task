import { useLoaderData } from "react-router-dom";
import DashboardContainer from "../../../components/DashboardContainer";

const CustomerDetails = () => {
  const data = useLoaderData();
  return (
    <DashboardContainer>
      <h2 className="text-2xl font-bold">#{data.id}</h2>
      <p>
        <span className="text-xl font-bold">Customer's name: </span>
        {data.name}
      </p>
      <p>
        <span className="text-xl font-bold">Customer's email: </span>
        {data.email}
      </p>
      <p>
        <span className="text-xl font-bold">Customer's number: </span>
        {data.number}
      </p>
    </DashboardContainer>
  );
};

export default CustomerDetails;
