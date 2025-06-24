const PriceFilter = () => {
  return (
    <select className="border border-gray-300 rounded px-3 py-2 text-sm">
      <option value="">Price</option>
      <option value="$">$</option>
      <option value="$$">$$</option>
      <option value="$$$">$$$</option>
      <option value="$$$$">$$$$</option>
    </select>
  );
};

export default PriceFilter;
