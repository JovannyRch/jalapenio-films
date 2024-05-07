import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slide from "./Slide";
import { useState } from "react";

const images = [
    {
        preview: '/images/ritmo-ahorro.png',
        title: 'CONSAR - El Ritmo del Ahorro',
        video: 'https://youtu.be/nZbfSGhSvwY',
    },
    {
        preview: '/images/heroes.png',
        title: 'CONSAR - Héroes',
        video: 'https://youtu.be/fIL2tCjJ4wg',

    },
    {
        preview: '/images/todo-es-todos.png',
        title: 'CONSAR - Todo es Todos',
        video: 'https://www.youtube.com/watch?v=K4TOrB7at0Y',
    },
    {
        preview: '/images/inmujeres.png',
        title: 'GOBIERNO DE MÉXICO - Inmujeres',
        video: 'https://youtu.be/LGHQYCMNlEo',
    },
    {
        preview: '/images/cancer-explorate.png',
        title: 'ISSSTE - Cáncer Explórate',
        video: 'https://youtu.be/spjahtX8rZM',
    },
    {
        preview: '/images/movilastic.png',
        title: 'KLEEB BEBÉ - Movilástic',
        video: 'https://youtu.be/qpQUVLiF9ZU',
    }
]




const ProjectsCarousel = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <div className="py-8 flex flex-col justify-center bg-white"
            style={{
                minHeight: 'calc(100vh - 80px)'
            }}
        >
            <Carousel autoPlay showThumbs={false} centerMode infiniteLoop
                onChange={() => setIsPlaying(!isPlaying)}

                renderIndicator={(onClickHandler, isSelected, index, label) => {
                    if (isSelected) {
                        return (
                            <li
                                style={{ display: "inline-block", margin: "0 8px", cursor: "pointer" }}
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
                            style={{ display: "inline-block", margin: "0 8px", cursor: "pointer" }}

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
                }
                }
            >
                {images.map((slide, i) => (
                    <Slide key={i} {...slide} reset={isPlaying} />
                ))}
            </Carousel>
        </div>
    )
}

export default ProjectsCarousel