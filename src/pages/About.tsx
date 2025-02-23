const About = () => {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12 mt-16">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">About Our Bike Store</h1>
          <p className="text-lg text-gray-600 mt-4">
            Your one-stop destination for high-quality bikes and accessories.
          </p>
        </div>
  
        {/* Mission Statement */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
          <p className="text-gray-600 mt-2">
            We are committed to providing top-notch bikes that enhance your riding experience, whether you're an urban commuter, a mountain trail enthusiast, or a casual rider.
          </p>
        </div>
  
        {/* Our Story */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800">Our Story</h2>
          <p className="text-gray-600 mt-2">
            Founded in 2020, our store was born from a passion for cycling and a vision to create a community-driven bike shop that offers the best products and services. We started with a small team and have grown into a trusted name in the biking industry.
          </p>
        </div>
  
        {/* Why Choose Us */}
        <div className="mt-12 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="p-4 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold">High-Quality Bikes</h3>
              <p className="text-gray-600">We offer top-tier bikes from trusted brands that ensure durability and performance.</p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold">Expert Support</h3>
              <p className="text-gray-600">Our team of bike enthusiasts provides expert guidance to help you choose the right bike.</p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold">Affordable Prices</h3>
              <p className="text-gray-600">We offer competitive pricing without compromising on quality.</p>
            </div>
          </div>
        </div>
  
        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600 mt-2">Have questions? Reach out to us and let’s find the perfect bike for you.</p>
          <a href="/contact" className="mt-4 inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Contact Us
          </a>
        </div>
      </div>
    );
  };
  
  export default About;
  