const Newsletter = () => {
    return (
      <section className="bg-[#f2f7ff] py-16 text-primary" id="newsletter">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Stay in the Loop
          </h2>
          <p className="mb-6 text-lg">
            Subscribe to receive the latest updates, offers, and biking news straight to your inbox.
          </p>
  
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto px-4 py-3 rounded-lg text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Newsletter;
  