const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Dhaka, Bangladesh",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      comment:
        "Fantastic service! The bike quality is top-notch, and the delivery was super fast. Highly recommended!",
    },
    {
      name: "Jamal Hossain",
      role: "Chattogram, Bangladesh",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      comment:
        "Very satisfied with the purchase. Their support team helped me choose the perfect bike for my needs.",
    },
    {
      name: "Nusrat Jahan",
      role: "Khulna, Bangladesh",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      comment:
        "I love my new electric bike! Smooth experience from browsing to checkout.",
    },
    {
      name: "Tanvir Rahman",
      role: "Rajshahi, Bangladesh",
      image: "https://randomuser.me/api/portraits/men/79.jpg",
      comment:
        "Good offers and genuine products. The mega menu helped me find the right category easily!",
    },
  ];
  
  const CustomerTestimonial = () => {
    return (
      <section className="bg-gray-100 py-16">
        <div className=" mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-10">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-2xl p-6 text-center border hover:shadow-xl transition"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 mx-auto rounded-full border-2 border-primary mb-4"
                />
                <h4 className="font-semibold text-lg text-gray-800">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                <p className="text-gray-700 mt-3 text-sm">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default CustomerTestimonial;
  