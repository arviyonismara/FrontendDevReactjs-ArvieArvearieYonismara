import { Link } from "react-router-dom";

const RestaurantItem = ({
  id,
  name,
  rating,
  price,
  isOpen,
  category,
  imageUrl,
}) => {
  return (
    <div className="w-full max-w-sm mx-auto border rounded shadow-sm overflow-hidden bg-white">
      <img src={imageUrl} alt={name} className="h-40 w-full object-cover" />

      <div className="p-4 space-y-2">
        <h2 className="font-semibold text-lg truncate">{name}</h2>

        <div className="text-yellow-500 text-sm">
          {"★".repeat(Math.floor(rating))}
          {"☆".repeat(5 - Math.floor(rating))}
        </div>

        <div className="text-sm text-gray-600">
          {category} · {price}
        </div>

        <div className="text-sm">
          <span className="text-green-600 font-medium">
            {isOpen ? "OPEN NOW" : "CLOSED"}
          </span>
        </div>

        <Link
          to={`/restaurants/${id}`}
          className="mt-4 inline-block text-blue-700 underline"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default RestaurantItem;
