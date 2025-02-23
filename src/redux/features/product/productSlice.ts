import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Product {
  id: string;
  name: string;
  brand: string;
  model: string;
  price: number;
  category: string;
  available: boolean;
}

interface ProductState {
  products: Product[];
  filteredProducts: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  filteredProducts: [],
  loading: false,
  error: null,
};

// ✅ Fetch products without Axios using fetch API
export const fetchProducts = createAsyncThunk<Product[]>(
  "products/fetch",
  async () => {
    const response = await fetch("https://your-api-url.com/products"); // Replace with your API
    if (!response.ok) throw new Error("Failed to fetch products");
    return response.json();
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    searchProducts: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.filteredProducts = state.products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.brand.toLowerCase().includes(searchTerm) ||
          product.category.toLowerCase().includes(searchTerm)
      );
    },
    filterProducts: (state, action) => {
      const { minPrice, maxPrice, category, brand, availability } = action.payload;
      state.filteredProducts = state.products.filter((product) => {
        return (
          product.price >= minPrice &&
          product.price <= maxPrice &&
          (category ? product.category === category : true) &&
          (brand ? product.brand === brand : true) &&
          (availability ? product.available === availability : true)
        );
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.filteredProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load products";
      });
  },
});

export const { searchProducts, filterProducts } = productSlice.actions;
export default productSlice.reducer;
