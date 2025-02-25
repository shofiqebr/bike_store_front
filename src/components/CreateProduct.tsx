import { useState } from "react";
import { useCreateProductMutation } from "../redux/api/productApi";

// Function to upload image to Cloudinary
const uploadImageToCloudinary = async (file: File): Promise<string | null> => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "bike_store");
    formData.append("cloud_name", "dal1rjdwl"); 

    const response = await fetch("https://api.cloudinary.com/v1_1/dal1rjdwl/image/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    return data.secure_url; 
  } catch (error) {
    console.error("Image upload failed:", error);
    return null;
  }
};

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    model: "",
    stock: "",
    category: "Mountain", // Default category
    description: "",
    image: "", // Added field for image URL
  });

  const [createProduct, { isLoading }] = useCreateProductMutation();
  const [imageFile, setImageFile] = useState<File | null>(null); // State to hold the image file

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!imageFile) {
      alert("Please upload an image.");
      return;
    }

    try {
      // Upload the image to Cloudinary
      const imageUrl = await uploadImageToCloudinary(imageFile);
      if (!imageUrl) throw new Error("Image upload failed.");

      // Create the product with the image URL
      await createProduct({
        ...formData,
        price: Number(formData.price),
        stock: Number(formData.stock),
        image: imageUrl, // Add the image URL to the form data
      }).unwrap();

      alert("Product created successfully!");
      setFormData({
        name: "",
        brand: "",
        price: "",
        model: "",
        stock: "",
        category: "Mountain",
        description: "",
        image: "",
      });
      setImageFile(null); // Reset the image file
    } catch (error) {
      console.error("Product creation failed:", error);
      alert("Error creating product");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="brand"
          placeholder="Brand Name"
          value={formData.brand}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="model"
          placeholder="Model"
          value={formData.model}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        {/* Category Dropdown */}
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        >
          <option value="Mountain">Mountain</option>
          <option value="Road">Road</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Electric">Electric</option>
        </select>

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        {/* Image Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={isLoading}
        >
          {isLoading ? "Creating..." : "Create Product"}
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
