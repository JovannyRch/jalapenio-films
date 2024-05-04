import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
    {
        url: 'https://thelift.mx/wp-content/uploads/2024/04/thumb-03.jpg',
        title: 'The Lift',
        subtitle: 'Ahhnuts'
    },
    {
        url: 'https://thelift.mx/wp-content/uploads/2023/09/Screenshot_20230928_122009.jpg',
        title: 'The Lift',
        subtitle: 'Ahhnuts'

    },
    {
        url: 'https://thelift.mx/wp-content/uploads/2024/04/thumb_02.jpg',
        title: 'The Lift',
        subtitle: 'Ahhnuts'
    },
    {
        url: 'https://thelift.mx/wp-content/uploads/2024/01/ahhnuts-portrait.jpg',
        title: 'The Lift',
        subtitle: 'Ahhnuts'
    }
]




const Slide = ({ src, title = "", subtitle = "" }) => {

    return (
        <div className="px-4 h-[75vh] relative">
            <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg cursor-pointer">
                <div className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform transform hover:scale-105" style={{ backgroundImage: `url(${src})` }} />
            </div>
            <div className="absolute inset-0 flex flex-col items-start justify-end text-white p-8">
                <h1 className="text-3xl font-bold">{title}</h1>
                <h2 className="text-xl font-semibold">{subtitle}</h2>
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