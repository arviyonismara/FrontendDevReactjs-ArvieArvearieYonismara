import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    fetch(
      `https://6859df299f6ef961115471c1.mockapi.io/api/v1/restaurants/${id}`
    )
      .then((res) => res.json())
      .then((data) => setRestaurant(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, [id]);

  if (!restaurant) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Link to="/" className="text-blue-600 underline">
        &larr; Back to Home
      </Link>

      <h1 className="text-3xl font-bold mt-4">{restaurant.name}</h1>
      <p className="text-gray-600">Rating: {restaurant.rating} ⭐</p>
      <p className="text-gray-600">Category: {restaurant.category}</p>
      <p className="text-gray-600">Price: {restaurant.price}</p>
      <p className="text-gray-600">
        Status: {restaurant.isOpen ? "Open" : "Closed"}
      </p>

      <img
        src={restaurant.imageUrl}
        alt={restaurant.name}
        className="w-full mt-4 rounded-md shadow-md"
      />
    </div>
  );
};

export default Detail;
