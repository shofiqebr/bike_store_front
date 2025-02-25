import { useState } from "react";
import { useGetAllProductsQuery } from "../redux/api/productApi";

const AllProducts = () => {
  const { data: products, isLoading, isError, error } = useGetAllProductsQuery(undefined);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 100000000,
    category: "",
    brand: "",
  });

  // console.log("Fetched products:", products);

  // Handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Ensure products.result is an array
  const allProducts = Array.isArray(products?.result) ? products.result : [];

  // Filter products based on search term & filters
  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch =
      searchTerm === "" || product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filters.category ? product.category === filters.category : true;
    const matchesBrand = filters.brand ? product.brand === filters.brand : true;
    const matchesPrice = product.price >= filters.minPrice && product.price <= filters.maxPrice;
    return matchesSearch && matchesCategory && matchesBrand && matchesPrice;
  });

  if (isLoading) return <p className="text-center text-gray-700">Loading...</p>;
  if (isError) return <p className="text-center text-red-500">Error: {error?.message}</p>;

  return (
    <div className="max-w-7xl mx-auto p-6 min-h-[600px]">
      <h1 className="text-3xl font-bold text-center mb-6 mt-24">All Products</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full p-2 border rounded-md"
      />

      {/* Filters */}
      <div className="flex gap-4 my-4">
        <input
          type="number"
          name="minPrice"
          value={filters.minPrice}
          onChange={handleFilterChange}
          className="p-2 border rounded-md"
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          value={filters.maxPrice}
          onChange={handleFilterChange}
          className="p-2 border rounded-md"
          placeholder="Max Price"
        />
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
      </div>

      {/* Products List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md">
              <img src={product.image} alt={product.name} className="w-full h-40 rounded-md" />
              <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-600">
                {product.brand} - {product.category}
              </p>
              <p className="font-bold">${product.price}</p>
              <button className="bg-primary text-white px-4 py-2 rounded-md mt-2">
                View Details
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
