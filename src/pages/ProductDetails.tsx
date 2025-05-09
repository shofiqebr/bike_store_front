/* eslint-disable @typescript-eslint/no-explicit-any */
// ProductDetails.tsx
import { useParams, useNavigate, Link } from "react-router-dom";
import { useGetProductByIdQuery, useGetAllProductsQuery } from "../redux/api/productApi";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { StarRating } from "../components/FeaturedProducts";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: product, isLoading, error } = useGetProductByIdQuery(id);
  const { data: allProducts } = useGetAllProductsQuery(undefined);

  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [location, setLocation] = useState<string>("Fetching location...");
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoords({ lat: latitude, lng: longitude });

          fetch(`https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`)
            .then((res) => res.json())
            .then((data) => {
              const city = data.address?.city || data.address?.town || data.address?.village || "Unknown City";
              const country = data.address?.country || "Unknown Country";
              setLocation(`${city}, ${country}`);
            })
            .catch(() => setLocation("Unable to retrieve location info"));
        },
        (error) => {
          console.error("Geolocation error:", error);
          setLocation("Permission denied or location unavailable");
        }
      );
    } else {
      setLocation("Geolocation not supported by your browser");
    }
  }, []);

  const handleBuyNow = () => {
    navigate(`/checkout/${product?.result._id}`);
  };

  const handleAddToWishlist = () => {
    if (!wishlist.includes(product?.result?.id)) {
      setWishlist((prev) => [...prev, product?.result?.id]);
    }
  };

  const suggestedProducts = allProducts?.result?.filter(
    (p: any) =>
      p._id !== product?.result?._id &&
      p.category === product?.result?.category &&
      Math.abs(p.price - product?.result?.price) <= product?.result?.price * 0.2
  );

  if (isLoading) return <p className="text-center mt-36">Loading...</p>;
  if (error) return <p className="text-center mt-36">Error loading product details.</p>;

  return (
    <div className="max-w-6xl mx-auto mt-36 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div>
          <img
            src={product?.result?.image}
            alt={product?.result?.name}
            className="w-full h-[400px] object-contain rounded-xl shadow-md"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-primary">{product?.result?.name}</h1>
          <p className="text-gray-600 text-sm">Brand: {product?.result?.brand}</p>
          <p className="text-gray-600 text-sm">Category: {product?.result?.category}</p>
          <p className="text-xl font-semibold text-accent">Price: ${product?.result?.price}</p>
          <p className="text-sm text-gray-500">In stock: {product?.result?.stock}</p>

          <StarRating
            initialRating={product?.result?.rating || 3.5}
            onChange={(newRating) => console.log("New rating:", newRating)}
          />

          <div className="flex items-center gap-2">
            <label className="text-sm">Qty:</label>
            <input
              type="number"
              min={1}
              max={product?.result?.stock}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-16 px-2 py-1 border rounded-md"
            />
          </div>

          <div className="flex gap-3 mt-4">
            <button
              onClick={handleBuyNow}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition"
            >
              Buy Now
            </button>
            <button
              onClick={handleAddToWishlist}
              className="border border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-white transition"
            >
              {wishlist.includes(product?.result?.id) ? "Wishlisted" : "Add to Wishlist"}
            </button>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Shipping Info</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>🚚 Delivery: 3–5 business days</li>
            <li>✅ Free returns within 14 days</li>
            <li>📦 Ships from Dhaka, Bangladesh</li>
            <li>🌍 Your Location: <span className="font-medium">{location}</span></li>
          </ul>
        </div>
      </div>

      {coords && (
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-2">📍 Your Location on Map</h2>
          <MapContainer
            center={[coords.lat, coords.lng]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "300px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
            />
            <Marker
              position={[coords.lat, coords.lng]}
              icon={L.icon({
                iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
                iconSize: [25, 41],
                iconAnchor: [12, 41],
              })}
            >
              <Popup>You are here!</Popup>
            </Marker>
          </MapContainer>
        </div>
      )}

      <div className="mt-12 border-t pt-6">
        <h3 className="text-xl font-bold mb-2 text-primary">Product Description</h3>
        <p className="text-gray-700">{product?.result?.description}</p>
      </div>

      {suggestedProducts?.length > 0 && (
        <div className="mt-10 mb-8">
          <h2 className="text-2xl font-bold mb-6">🛍️ Suggested Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {suggestedProducts.map((item: any) => (
              <div
                key={item._id}
                className="bg-white border rounded-xl shadow-md p-4 hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-contain rounded"
                />
                <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-1">{item.brand}</p>
                <p className="font-bold text-primary">${item.price}</p>
                <Link
                  to={`/product/${item._id}`}
                  className="inline-block mt-3 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition"
                >
                  View
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;