import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

// import image1 from "../../assets/image1.webp";
// import image3 from "../../assets/image3.webp";
// import image2 from "../../assets/image2.webp";
import Autoplay from "embla-carousel-autoplay";

const CarouselCard = () => {
  const autoplayPlugin = Autoplay({
    delay: 4000, // 4 seconds between slides
    stopOnInteraction: false, // Continue autoplay after user interaction
  });
  return (
    <Carousel
      plugins={[autoplayPlugin]}
      opts={{ loop: true }}
      className="imageCard max-h-screen min-w-screen content-center flex items-center justify-center overflow-hidden bg-black
       "
    >
      <CarouselContent className="sm:h-[100vh] h-[70vh] ">
        <CarouselItem>
          <img
            src="https://res.cloudinary.com/djjwvuixb/image/upload/t_Large Screen Size/v1740368929/image1_iqzish.webp"
            loading="lazy"
            alt="Slider 1"
            className="w-full h-full object-cover"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="https://res.cloudinary.com/djjwvuixb/image/upload/t_Large Screen Size/v1740368938/image2_clrwmk.webp"
            loading="lazy"
            alt="Slider 2"
            className="w-full h-full object-cover "
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="https://res.cloudinary.com/djjwvuixb/image/upload/t_Large Screen Size/v1740368945/image3_mtqzbs.webp"
            loading="lazy"
            alt="Slider 3"
            className="w-full h-full object-cover  "
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselCard;
