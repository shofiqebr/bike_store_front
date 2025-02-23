import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields.");
      return;
    }
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 mt-24">
      <h2 className="text-3xl font-bold text-gray-800 text-center">Contact Us</h2>
      <p className="text-gray-600 text-center mt-2">We'd love to hear from you! Reach out with any questions.</p>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-2 border rounded-md"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
          {submitted && <p className="text-green-600 mt-2 text-center">Message sent successfully!</p>}
        </div>

        {/* Contact Information */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
          <p className="text-gray-600">
            <strong>Address:</strong> 123 Bike Street, Dhaka, Bangladesh
          </p>
          <p className="text-gray-600 mt-2">
            <strong>Phone:</strong> +880 1234-567890
          </p>
          <p className="text-gray-600 mt-2">
            <strong>Email:</strong> support@bikestore.com
          </p>

          {/* Google Map */}
          <div className="mt-4">
            <iframe
              title="Google Map"
              className="w-full h-48 rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902432054023!2d90.39132201498143!3d23.750886894691816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b89802b5d7f7%3A0xe3b34cbb9c6b5153!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1638969573833!5m2!1sen!2sbd"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
