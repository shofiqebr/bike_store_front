const Banner = () => {
    const BannerImg =
      "https://res.cloudinary.com/dal1rjdwl/image/upload/v1740143305/banner_i4b8u1.jpg";
    return (
      <div
        style={{
          backgroundImage: `url(${BannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px", // Adjust height as needed
          width: "100%",
        }}
        className="flex justify-around">
        <div className="flex flex-col items-center justify-center">
          <p>The worlds Most Latest Technology</p>
          <p>Fly as Fast as Rocket</p>
        </div>
        <div className="flex items-center justify-center">
          cvxc
        </div>
      </div>
    );
  };
  
  export default Banner;
  