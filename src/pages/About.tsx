import { FaBicycle, FaHandsHelping, FaDollarSign } from "react-icons/fa";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 pt-28 bg-neutral text-gray-800">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-primary">About Our Bike Store</h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Your one-stop destination for high-quality bikes, expert support, and unbeatable value.
        </p>
      </div>

      {/* Mission Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-secondary mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We’re passionate about making cycling accessible and enjoyable for everyone—from city commuters to mountain trail explorers. We aim to empower every rider with premium bikes, expert service, and a supportive community.
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/demo/image/upload/v1715000001/about_mission.jpg"
          alt="Our Mission"
          className="w-full rounded-xl shadow-lg"
        />
      </div>

      {/* Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
        <img
          src="https://res.cloudinary.com/demo/image/upload/v1715000001/about_story.jpg"
          alt="Our Story"
          className="w-full rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold text-secondary mb-4">Our Story</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Founded in 2020, our store began with a simple goal: make great bikes accessible to everyone. What started as a small shop run by cycling enthusiasts has now grown into a well-loved community hub trusted by riders across the country.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white p-8 rounded-2xl shadow-lg mb-16">
        <h2 className="text-3xl font-bold text-center text-primary mb-10">Why Choose Us?</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="p-6 bg-neutral rounded-lg shadow hover:shadow-md transition">
            <FaBicycle className="text-primary text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">High-Quality Bikes</h3>
            <p className="text-gray-600">
              We offer reliable bikes from premium brands, engineered for performance and longevity.
            </p>
          </div>
          <div className="p-6 bg-neutral rounded-lg shadow hover:shadow-md transition">
            <FaHandsHelping className="text-primary text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
            <p className="text-gray-600">
              Get personalized recommendations and support from our bike-savvy team.
            </p>
          </div>
          <div className="p-6 bg-neutral rounded-lg shadow hover:shadow-md transition">
            <FaDollarSign className="text-primary text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fair Pricing</h3>
            <p className="text-gray-600">
              Enjoy competitive prices without compromising on quality or service.
            </p>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-secondary">Let’s Connect</h2>
        <p className="text-gray-600 mt-3 text-lg">
          Have questions or need help choosing your next ride? We’re just a message away.
        </p>
        <a
          href="/contact"
          className="inline-block mt-6 px-8 py-3 bg-primary text-white font-semibold text-lg rounded-full hover:bg-secondary transition-colors"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default About;
