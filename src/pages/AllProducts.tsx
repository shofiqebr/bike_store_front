import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, searchProducts, filterProducts } from "../redux/features/product/productSlice";
import { RootState, AppDispatch } from "../redux/features/store";

const AllProducts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filteredProducts, loading, error } = useSelector((state: RootState) => state.products);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 10000,
    category: "",
    brand: "",
    availability: true,
  });

  useEffect(() => {
    dispatch(fetchProducts()); // Fetch products on mount
  }, [dispatch]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    dispatch(searchProducts(e.target.value));
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const applyFilters = () => {
    dispatch(filterProducts(filters));
  };

//   if (loading) return <p className="text-center text-gray-700">Loading...</p>;
//   if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-7xl mx-auto p-6 mt-24 min-h-[600px]">
      <h1 className="text-3xl font-bold text-center mb-6 mt-24">All Products</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name, brand, or category..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full p-2 border rounded-md"
      />

      {/* Filters */}
      <div className="flex gap-4 my-4">
        <input type="number" name="minPrice" value={filters.minPrice} onChange={handleFilterChange} className="p-2 border rounded-md" placeholder="Min Price" />
        <input type="number" name="maxPrice" value={filters.maxPrice} onChange={handleFilterChange} className="p-2 border rounded-md" placeholder="Max Price" />
        <select name="category" onChange={handleFilterChange} className="p-2 border rounded-md">
          <option value="">All Categories</option>
          <option value="Mountain">Mountain</option>
          <option value="Road">Road</option>
        </select>
        <select name="brand" onChange={handleFilterChange} className="p-2 border rounded-md">
          <option value="">All Brands</option>
          <option value="Giant">Giant</option>
          <option value="Trek">Trek</option>
        </select>
        <button onClick={applyFilters} className="bg-primary text-white px-4 py-2 rounded-md">Apply</button>
      </div>

      {/* Products List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.brand} - {product.model}</p>
            <p className="font-bold">${product.price}</p>
            <p className="text-sm text-gray-500">{product.category}</p>
            <button className="bg-primary text-white px-4 py-2 rounded-md mt-2">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
