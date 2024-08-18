import { useParams } from "react-router-dom";

export default function ProductDetailsPage() {
  const params = useParams();
  return (
    <>
      <h1>Products details page</h1>
      <p>{params.productId}</p>
    </>
  );
}
