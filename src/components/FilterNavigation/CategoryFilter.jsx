const CategoryFilter = () => {
  return (
    <select className="border border-gray-300 rounded px-3 py-2 text-sm">
      <option value="">Categories</option>
      <option value="thai">Thai</option>
      <option value="japanese">Japanese</option>
      <option value="mexican">Mexican</option>
      <option value="italian">Italian</option>
      <option value="seafood">Seafood</option>
    </select>
  );
};

export default CategoryFilter;
