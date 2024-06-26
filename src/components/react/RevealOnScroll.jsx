
import { useEffect, useRef, useState } from "react";

const RevealOnScroll = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const onWindScroll = () => {
            const element = ref.current;
            if (element) {
                const { top } = element.getBoundingClientRect();
                const isVisible = top < window.innerHeight;
                setIsVisible(isVisible);
            }
        };

        window.addEventListener("scroll", onWindScroll);
        return () => {
            window.removeEventListener("scroll", onWindScroll);
        };
    }, []);

    const classes = `transition-opacity duration-1000
        ${isVisible ? "opacity-100" : "opacity-0"
        }`;

    return (
        <div ref={ref} className={classes}>
            {children}
        </div>
    );
};

const RevealOnScrollApp = () => {
    return (
        <div className="container mx-auto text-center bg-red-100">
            <h1 className="text-7xl font-bold mb-8 text-green">
                GeeksforGeeks
            </h1>
            <h2 className="text-4xl ">
                Reveal on Scroll in React using Tailwind CSS
            </h2>
            <RevealOnScroll>
                <p className="text-3xl h-[15em] mt-[10em]">
                    Welcome to the computer science portal!
                </p>
            </RevealOnScroll>
            <RevealOnScroll>
                <p className="text-3xl h-[15em] mt-[10em]">
                    Learn Web Development
                </p>
            </RevealOnScroll>
            <RevealOnScroll>
                <p className="text-3xl h-[15em] mt-[10em]">
                    Learn Android Development
                </p>
            </RevealOnScroll>
            <RevealOnScroll>
                <p className="text-3xl h-[15em] mt-[10em]">
                    Learn Data Stuctures and Algorithms
                </p>
            </RevealOnScroll>
            <RevealOnScroll>
                <p className="text-3xl h-[15em] mt-[10em]">
                    and more...
                </p>
            </RevealOnScroll>
            {/* Add more RevealOnScroll components 
			for other elements */}
        </div>
    );
};

export default RevealOnScrollApp;
