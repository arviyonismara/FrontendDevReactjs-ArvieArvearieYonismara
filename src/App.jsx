import { useState, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import FilterNavigation from "./components/FilterNavigation/FilterNavigation";
import RestaurantItem from "./components/RestaurantItem";
// import restaurants from "./data/restaurants";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [isOpenOnly, setIsOpenOnly] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredRestaurants = restaurants.filter((item) => {
    const matchOpen = isOpenOnly ? item.isOpen === true : true;
    const matchPrice = selectedPrice ? item.price === selectedPrice : true;
    const matchCategory = selectedCategory
      ? item.category === selectedCategory
      : true;
    return matchOpen && matchPrice && matchCategory;
  });

  useEffect(() => {
    fetch("https://6859df299f6ef961115471c1.mockapi.io/api/v1/restaurants")
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const categories = [...new Set(restaurants.map((item) => item.category))];

  return (
    <div className="bg-white min-h-screen px-4 sm:px-8">
      <Header />
      <FilterNavigation
        isOpenOnly={isOpenOnly}
        setIsOpenOnly={setIsOpenOnly}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">All Restaurants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredRestaurants.map((item) => (
            <RestaurantItem
              key={item.id}
              id={item.id}
              name={item.name}
              rating={item.rating}
              price={item.price}
              isOpen={item.isOpen}
              category={item.category}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
