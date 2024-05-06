import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
    {
        url: '/images/ritmo-ahorro.png',
        title: 'El Ritmo del Ahorro',
    },
    {
        url: '/images/heroes.png',
        title: 'Heroes',

    },
    {
        url: '/images/todo-es-todos.png',
        title: 'Todo es Todos',
    },
    {
        url: '/images/inmujeres.png',
        title: 'INMUJERES',
    },
    {
        url: '/images/cancer-explorate.png',
        title: 'Cancer Explorate',
    },
    {
        url: '/images/movilastic.png',
        title: 'KLEEN BEBE Movilastic',
    }
]




const Slide = ({ src, title = "" }) => {

    return (
        <div className="px-4 md:h-[75vh] h-[300px] relative">
            <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg cursor-pointer">
                <div className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform transform hover:scale-105" style={{ backgroundImage: `url(${src})` }} />
            </div>
            <div className="absolute inset-0 flex flex-col items-start justify-end text-white p-8">
                <h1 className="text-3xl font-bold font-arimo">{title}</h1>
            </div>
        </div>
    )

}

const ProjectsCarousel = () => {
    return (
        <div className="py-8">
            <Carousel autoPlay showThumbs={false} centerMode infiniteLoop >
                {images.map((slide, i) => (
                    <Slide src={slide.url} title={slide.title} subtitle={slide.subtitle} key={i} />
                ))}
            </Carousel>
        </div>
    )
}

export default ProjectsCarousel