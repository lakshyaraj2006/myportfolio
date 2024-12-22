import { useEffect, useRef } from "react";
import Typed from "typed.js";

export const Hero = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Python', 'JavaScript', 'Frontend Development', 'Backend Development', 'Fullstack Web Development', 'NoSQL &amp; SQL Databases'],
            backSpeed: 15,
            smartBackspace: true,
            backDelay: 1200,
            startDelay: 1000,
            typeSpeed: 25,
            loop: true,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, [])

    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Lakshyaraj Dash</h1>
                    <p className="font-semibold">Skills: <span ref={el} className="text-blue-500"></span></p>
                    <p className="mb-8 leading-relaxed">I am a web developer enthusiast. Love to solve problems and face challenges. Browse my projects and my blog.</p>
                    <div className="flex justify-center">
                        <a href="/projects" className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Browse Projects</a>
                        <a href="/blog" className="ml-4 inline-flex bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg text-white">Browse Blog</a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src="/images/hero.jpg" />
                </div>
            </div>
        </section>
    )
}
