/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useGetAllProductsQuery } from "../redux/api/productApi";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const { data: products } = useGetAllProductsQuery(undefined);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 100000000,
    category: "",
    brand: "",
    rating: 0,
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Convert numeric inputs to number
    const numericFields = ["minPrice", "maxPrice", "rating"];
    const newValue = numericFields.includes(name) ? Number(value) : value;

    setFilters((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const allProducts = Array.isArray(products?.result) ? products.result : [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filteredProducts = allProducts.filter((product: any) => {
    const searchTermLower = searchTerm.toLowerCase();
    const matchesSearch =
      searchTerm === "" ||
      product.name?.toLowerCase().includes(searchTermLower) ||
      product.brand?.toLowerCase().includes(searchTermLower) ||
      product.category?.toLowerCase().includes(searchTermLower) ||
      String(product.price).includes(searchTermLower) ||
      String(product.rating).includes(searchTermLower);
  
    const matchesCategory = filters.category ? product.category === filters.category : true;
    const matchesBrand = filters.brand ? product.brand === filters.brand : true;
    const matchesRating = filters.rating > 0 ? (product.rating ?? 0) >= filters.rating : true;
    const matchesPrice = product.price >= filters.minPrice && product.price <= filters.maxPrice;
  
    return matchesSearch && matchesCategory && matchesBrand && matchesRating && matchesPrice;
  });
  
  

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 mt-24 min-h-screen">
      {/* Search Bar */}
      <div className="mb-6 text-center">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full max-w-md p-3 border rounded-lg shadow-sm"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Filters */}
        <div className="w-full lg:w-1/4 border p-4 rounded-lg shadow-sm space-y-4">
          <h2 className="text-lg font-semibold">Filter</h2>

          <select name="category" onChange={handleFilterChange} className="w-full p-2 border rounded-md">
            <option value="">All Categories</option>
            <option value="Mountain">Mountain</option>
            <option value="Road">Road</option>
          </select>

          <select name="brand" onChange={handleFilterChange} className="w-full p-2 border rounded-md">
            <option value="">All Brands</option>
            <option value="Giant">Giant</option>
            <option value="Trek">Trek</option>
          </select>

          <div className="flex items-center justify-between">
            <input
              type="number"
              name="minPrice"
              placeholder="Min Price"
              value={filters.minPrice}
              onChange={handleFilterChange}
              className="w-[48%] p-2 border rounded-md"
            />
            <input
              type="number"
              name="maxPrice"
              placeholder="Max Price"
              value={filters.maxPrice}
              onChange={handleFilterChange}
              className="w-[48%] p-2 border rounded-md"
            />
          </div>

          <select name="rating" onChange={handleFilterChange} className="w-full p-2 border rounded-md">
            <option value="0">Any Rating</option>
            <option value="4">4★ and up</option>
            <option value="3">3★ and up</option>
            <option value="2">2★ and up</option>
            <option value="1">1★ and up</option>
          </select>
        </div>

        {/* Product Cards */}
        <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedProducts.length > 0 ? (
            paginatedProducts.map((product: any) => (
              <div key={product._id} className="border p-4 rounded-lg shadow-md">
                <img src={product.image} className="w-full h-40 object-cover rounded-md" />
                <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
                <p className="text-gray-600">
                  {product.brand} - {product.category}
                </p>
                <p className="font-bold text-green-600">${product.price}</p>
                <Link to={`/product/${product._id}`}>
                  <button className="bg-primary text-white px-4 py-2 rounded-md mt-2 w-full">
                    View Details
                  </button>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No products found.</p>
          )}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-2">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md border ${
              currentPage === index + 1 ? "bg-primary text-white" : "bg-gray-100"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
