import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slide from "./Slide";
import { useState } from "react";

const images = [
  {
    preview: "/images/home/1_movilastic.webp",
    title: "KLEEB BEBÉ - Movilástic",
    video: "https://youtu.be/qpQUVLiF9ZU",
  },
  {
    preview: "/images/home/2_ritmo_ahorro.webp",
    title: "CONSAR - El Ritmo del Ahorro",
    video: "https://youtu.be/nZbfSGhSvwY",
  },
  {
    preview: "/images/home/3_heroes.webp",
    title: "CONSAR - Héroes",
    video: "https://youtu.be/fIL2tCjJ4wg",
  },
  {
    preview: "/images/home/4_todo_es_todos.webp",
    title: "CONSAR - Todo es Todos",
    video: "https://www.youtube.com/watch?v=K4TOrB7at0Y",
  },
  {
    preview: "/images/home/5_inmujeres.webp",
    title: "GOBIERNO DE MÉXICO - Inmujeres",
    video: "https://youtu.be/LGHQYCMNlEo",
  },
  {
    preview: "/images/home/6_cancer_explorate.webp",
    title: "ISSSTE - Cáncer Explórate",
    video: "https://youtu.be/spjahtX8rZM",
  },
  {
    preview: "/images/home/7_afore.webp",
    title: "AFORE MOVIL",
    video: "https://youtu.be/54zTwB5rDhw",
  },
  {
    preview: "/images/home/8_country.webp",
    title: "COUNTRY CLUB",
    video: "https://youtu.be/TgUNs2YO0Vg",
  },
];

const ProjectsCarousel = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div
      className="py-8 flex flex-col justify-center bg-white"
      style={{
        minHeight: "calc(100vh - 80px)",
      }}
    >
      <Carousel
        autoPlay
        showThumbs={false}
        centerMode
        infiniteLoop
        onChange={() => setIsPlaying(!isPlaying)}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <li
                style={{
                  display: "inline-block",
                  margin: "0 8px",
                  cursor: "pointer",
                }}
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "black",
                    borderRadius: "4px",
                  }}
                  onClick={onClickHandler}
                />
              </li>
            );
          }
          return (
            <li
              style={{
                display: "inline-block",
                margin: "0 8px",
                cursor: "pointer",
              }}
              aria-label={`${label} ${index + 1}`}
              title={`${label} ${index + 1}`}
              onClick={onClickHandler}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "4px",
                }}
                className="bg-[#bdbdbd] hover:bg-black transition-all duration-300 ease-in-out"
              />
            </li>
          );
        }}
      >
        {images.map((slide, i) => (
          <Slide key={i} {...slide} reset={isPlaying} />
        ))}
      </Carousel>
    </div>
  );
};

export default ProjectsCarousel;
