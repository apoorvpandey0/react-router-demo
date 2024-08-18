import { Link } from "react-router-dom";
function Homepage() {
  return (
    <>
      <h1>Homepage</h1>
      <Link to="/products">List of products</Link>
    </>
  );
}

export default Homepage;
