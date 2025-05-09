const HowItWorks = () => {
    const steps = [
      {
        title: "1. Browse Bikes",
        description: "Explore our wide range of bikes from various categories tailored to your needs.",
        icon: "🚲",
      },
      {
        title: "2. Choose a Product",
        description: "Pick the perfect bike with the features you want at your preferred price.",
        icon: "🛒",
      },
      {
        title: "3. Place an Order",
        description: "Add to cart and complete the checkout process in just a few clicks.",
        icon: "📦",
      },
      {
        title: "4. Fast Delivery",
        description: "Get your bike delivered quickly and safely to your doorstep.",
        icon: "🚚",
      },
    ];
  
    return (
      <section className="py-16 bg-gray-50" id="how-it-works">
        <div className=" mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-primary mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <div className="text-5xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default HowItWorks;
  