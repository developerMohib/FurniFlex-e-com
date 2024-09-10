import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Banner1 from "../../assets/Banner1.jpg"
import Banner2 from "../../assets/Banner2.jpg"
import Banner3 from "../../assets/Banner3.jpg"
import Banner4 from "../../assets/Banner4.jpg"

const Banner = () => {
    const settings = {
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,autoplay: true,
        autoplaySpeed: 2000,
      };

    return (
        <Slider {...settings}>
      <div>
        <img className="w-full md:h-[400px]" src={Banner1} alt="" />
      </div>
      <div>
        <img className="w-full md:h-[400px]" src={Banner2} alt="" />
      </div>
      <div>
        <img className="w-full md:h-[400px]"  src={Banner3} alt="" />
      </div>
      <div>
        <img className="w-full md:h-[400px]" src={Banner4} alt="" />
      </div>
    </Slider>
    );
};

export default Banner;