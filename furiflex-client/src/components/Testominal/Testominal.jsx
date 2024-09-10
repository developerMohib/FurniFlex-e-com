import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testominal = () => {
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      <div className="p-4 mt-20">
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
          <img
            className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto object-cover"
            src="https://images.unsplash.com/photo-1495716868937-273203d5bb0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxsYWR5fGVufDB8MHx8fDE2OTQxNzI4MTV8MA&ixlib=rb-4.0.3&q=80&w=1080"
            alt=""
            width={384}
            height={512}
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium dark:text-slate-100">
                “Tailwind CSS is the only framework that I have seen scale on
                large teams. It is easy to customize, adapts to any design, and
                the build size is tiny.”
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                Promath Dayan
              </div>
              <div className="text-slate-700 dark:text-slate-400">
                Staff Manager, Barlin
              </div>
            </figcaption>
          </div>
        </figure>
      </div>

      <div className="p-4">
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
          <img
            className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto object-cover"
            src="https://plus.unsplash.com/premium_photo-1661582266427-c3054efeab65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b3duZXJ8ZW58MHx8MHx8fDA%3D"
            alt=""
            width={384}
            height={256}
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium dark:text-slate-100">
                “Tailwind CSS is the only framework that I have seen scale on
                large teams. It is easy to customize, adapts to any design, and
                the build size is tiny.”
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">Sarah Khanom</div>
              <div className="text-slate-700 dark:text-slate-400">
                Product Manager, Algolia
              </div>
            </figcaption>
          </div>
        </figure>
      </div>

      <div className="p-4">
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
          <img
            className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto object-cover"
            src="https://plus.unsplash.com/premium_photo-1661596672990-a0c336de4e0d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width={384}
            height={512}
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium dark:text-slate-100">
                “Tailwind CSS is the only framework that I have seen scale on
                large teams. It is easy to customize, adapts to any design, and
                the build size is tiny.”
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                Mishel Johnson
              </div>
              <div className="text-slate-700 dark:text-slate-400">
                Staff Engineer, Australia
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
    </Slider>
  );
};

export default Testominal;
