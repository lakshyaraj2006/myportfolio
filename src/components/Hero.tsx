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
            <section className="container px-4 py-10 mx-auto text-center">
                <img src="/images/logo.png" className="hidden md:flex justify-self-center mb-6" width="100" height="100" alt="" />
                <h1 className="text-3xl mb-6 leading-snug text-gray-800 dark:text-gray-200 md:text-4xl font-bold">
                    Lakshyaraj Dash
                </h1>
                <h2 className="text-xl">
                    My Skills include&nbsp;
                    <br className="block md:hidden" />
                    <span className="font-semibold underline decoration-primary" ref={el}></span>
                </h2>

                <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                    I am a web developer enthusiast. Love to solve problems and face challenges. Browse my projects and my blog.
                </p>
                <div className="flex flex-col md:flex-row gap-6 items-center justify-center mt-6">
                    <a href="/projects" className={buttonVariants({ variant: "default" })}>Browse Projects</a>
                    <a href="/blog" className={buttonVariants({ variant: "outline" })}>Browse Blog</a>
                </div>
            </section>
        </>
    )
}
