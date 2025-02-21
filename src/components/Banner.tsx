
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
          <p className="text-4xl font-bold">The <span className="text-accent">worlds</span>  Most <span className="text-accent">Latest</span> Technology</p>
          <p className="text-3xl font-bold"><span className="text-accent">Fly</span> as <span className="text-accent">Fast</span> as <span className="text-accent">Rocket</span></p>
        </div>


        <div className="flex items-center justify-center w-1/2">
           <Carousel
           autoPlay
           infiniteLoop
          //  labels={false}
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
           >
                <div>
                    <img className="h-[400px]" src="https://res.cloudinary.com/dal1rjdwl/image/upload/v1740178624/e00ecf9b-794a-4983-a1d7-5909c0cac0cf-removebg-preview_znabxj.png" />
                  
                </div>
                <div>
                    <img className="h-[400px]" src="https://res.cloudinary.com/dal1rjdwl/image/upload/v1740178574/195e0ddc-b9ab-4138-80f5-457cc05c5f6f-removebg-preview_yexua4.png" />
                 
                </div>
                <div>
                    <img className="h-[400px]" src="https://res.cloudinary.com/dal1rjdwl/image/upload/v1740178636/7bcfff7a-f659-4c2e-b82a-64fb81951f15-removebg-preview_qhvxoh.png" />
                
                </div>
            </Carousel>
        </div>
      </div>
    );
  };
  
  export default Banner;
  