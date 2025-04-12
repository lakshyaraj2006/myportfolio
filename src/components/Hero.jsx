import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { buttonVariants } from "./ui/button";

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
        <>
            <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
                <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
                    <h1 className="text-3xl mb-6 leading-snug text-gray-800 dark:text-gray-200 md:text-4xl font-bold">
                        Lakshyaraj Dash
                    </h1>
                    <h2 className="text-2xl">
                        My Skills include <span className="font-semibold underline decoration-primary" ref={el}></span>
                    </h2>

                    <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                        I am a web developer enthusiast. Love to solve problems and face challenges. Browse my projects and my blog.
                    </p>
                    <div className="space-x-6 my-6">
                        <a href="/projects" className={buttonVariants({ variant: "default" })}>Browse Projects</a>
                        <a href="/blog" className={buttonVariants({ variant: "outline" })}>Browse Blog</a>
                    </div>
                </div>

                <div className="hidden md:block w-full mt-4 lg:mt-0 lg:w-1/2">
                    <img
                        src="/images/hero.svg"
                        alt="hero image"
                        className="w-full h-full max-w-md mx-auto"
                    />
                </div>
            </section>
        </>
    )
}
