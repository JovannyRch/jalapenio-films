import { useEffect, useState } from "react"
import ReactPlayer from "react-player";

const Container = ({ children, className = "" }) => {
    return (
        <div className={`mx-4 md:h-[75vh]  h-[250px] pb-[70px]  relative  ${className}`}>
            {children}
        </div>
    )
}


const Preview = ({ title, preview, onClick }) => {
    return <>
        <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <div className="w-full  h-full bg-cover bg-center bg-no-repeat transition-transform transform hover:scale-200" style={{ backgroundImage: `url(${preview})` }} />
        </div>
        <div className="absolute inset-0 flex flex-col items-start justify-end text-gray-900 p-2 bottom-7 md:bottom-0 md:pb-7 ">
            <h1 className="md:text-2xl xl:text-3xl sm:text-xl font-bold font-arimo  text-left">{title}</h1>
        </div>
        <div className="w-full h-full top-[40%] left-[42%] absolute">
            <div className="cursor-pointer" onClick={onClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="md:w-20 md:h-20 w-10 h-10 text-white">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
    </>
}

const Slide = ({ preview, title = "", video = "", reset }) => {

    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsPlaying(false)
        }, 350)

        return () => clearTimeout(timeout)
    }, [reset])



    if (isPlaying) {
        return <Container className="">
            <ReactPlayer url={video} playing controls width="100%" height="100%" />
        </Container>
    }


    return (
        <Container>
            <Preview title={title} preview={preview} onClick={() => setIsPlaying(true)} />
        </Container>
    )

}

export default Slide