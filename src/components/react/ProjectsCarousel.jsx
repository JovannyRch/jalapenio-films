import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slide from "./Slide";
import { useState } from "react";

const images = [
    {
        preview: '/images/ritmo-ahorro.png',
        title: 'El Ritmo del Ahorro',
        video: 'https://www.youtube.com/watch?v=K4TOrB7at0Y',
    },
    {
        preview: '/images/heroes.png',
        title: 'Heroes',
        video: 'https://www.youtube.com/watch?v=K4TOrB7at0Y',

    },
    {
        preview: '/images/todo-es-todos.png',
        title: 'Todo es Todos',
        video: 'https://www.youtube.com/watch?v=K4TOrB7at0Y',
    },
    {
        preview: '/images/inmujeres.png',
        title: 'INMUJERES',
        video: 'https://www.youtube.com/watch?v=K4TOrB7at0Y',
    },
    {
        preview: '/images/cancer-explorate.png',
        title: 'Cancer Explorate',
        video: 'https://www.youtube.com/watch?v=K4TOrB7at0Y',
    },
    {
        preview: '/images/movilastic.png',
        title: 'KLEEN BEBE Movilastic',
        video: 'https://www.youtube.com/watch?v=K4TOrB7at0Y',
    }
]




const ProjectsCarousel = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <div className="py-8 min-h-[50vh] flex flex-col justify-center">
            <Carousel autoPlay showThumbs={false} centerMode infiniteLoop
                onChange={() => setIsPlaying(!isPlaying)}
            >
                {images.map((slide, i) => (
                    <Slide key={i} {...slide} reset={isPlaying} />
                ))}
            </Carousel>
        </div>
    )
}

export default ProjectsCarousel