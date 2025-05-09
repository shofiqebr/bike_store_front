import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Top 5 Mountain Bikes in 2025",
    excerpt: "Discover the best mountain bikes of the year based on performance and durability.",
    image: "https://res.cloudinary.com/demo/image/upload/v1715000001/blog_mountain.jpg",
    link: "/blog/top-5-mountain-bikes-2025",
  },
  {
    id: 2,
    title: "How to Maintain Your Bike Like a Pro",
    excerpt: "Keep your bike in top shape with these expert maintenance tips.",
    image: "https://res.cloudinary.com/demo/image/upload/v1715000001/blog_maintenance.jpg",
    link: "/blog/bike-maintenance-tips",
  },
  {
    id: 3,
    title: "Choosing the Right Helmet",
    excerpt: "Safety first! Learn how to choose the perfect helmet for your ride.",
    image: "https://res.cloudinary.com/demo/image/upload/v1715000001/blog_helmet.jpg",
    link: "/blog/choosing-helmet",
  },
  {
    id: 4,
    title: "Benefits of Electric Bikes",
    excerpt: "Electric bikes are revolutionizing commuting. Here’s why you should get one.",
    image: "https://res.cloudinary.com/demo/image/upload/v1715000001/blog_electric.jpg",
    link: "/blog/electric-bike-benefits",
  },
  {
    id: 5,
    title: "Top Family-Friendly Bike Trails",
    excerpt: "Plan a weekend ride with these scenic and safe bike trails.",
    image: "https://res.cloudinary.com/demo/image/upload/v1715000001/blog_trails.jpg",
    link: "/blog/family-bike-trails",
  },
  {
    id: 6,
    title: "How to Choose the Right Bike Size",
    excerpt: "A proper bike fit can make all the difference. Here’s how to get it right.",
    image: "https://res.cloudinary.com/demo/image/upload/v1715000001/blog_fit.jpg",
    link: "/blog/bike-size-guide",
  },
  {
    id: 7,
    title: "Cycling Gear You Can’t Ride Without",
    excerpt: "Explore essential cycling gear that improves comfort and performance.",
    image: "https://res.cloudinary.com/demo/image/upload/v1715000001/blog_gear.jpg",
    link: "/blog/must-have-cycling-gear",
  },
  {
    id: 8,
    title: "Why Kids Should Ride Bikes More Often",
    excerpt: "From health to independence—here’s why biking is great for children.",
    image: "https://res.cloudinary.com/demo/image/upload/v1715000001/blog_kids.jpg",
    link: "/blog/kids-biking-benefits",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-white py-16 pt-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Latest Blog Posts</h2>
        <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white border border-primary rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-700 mb-4">{blog.excerpt}</p>
                <Link
                  to={blog.link}
                  className="inline-block text-primary font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
