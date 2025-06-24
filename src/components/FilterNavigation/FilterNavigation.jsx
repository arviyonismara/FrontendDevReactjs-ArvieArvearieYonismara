function FilterNavigation({
  isOpenOnly,
  setIsOpenOnly,
  selectedPrice,
  setSelectedPrice,
  selectedCategory,
  setSelectedCategory,
  categories,
}) {
  return (
    <div className="mb-6 flex flex-wrap gap-4 items-center border-y-1 p-5 border-gray-400">
      {/* Filter: Open Now */}
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={isOpenOnly}
          onChange={() => setIsOpenOnly((prev) => !prev)}
        />
        <span className="text-gray-800">Open Now</span>
      </label>

      {/* Filter: Price Dropdown */}
      <label className="flex items-center gap-2">
        <span className="text-gray-800">Price:</span>
        <select
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
          className="border rounded px-3 py-1"
        >
          <option value="">All</option>
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
          <option value="$$$$">$$$$</option>
        </select>
      </label>

      <label className="flex items-center gap-2">
        <span className="text-gray-800">Category:</span>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded px-3 py-1"
        >
          <option value="">All</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default FilterNavigation;
