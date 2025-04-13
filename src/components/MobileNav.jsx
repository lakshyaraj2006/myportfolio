import { MenuIcon } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <span className={cn("block md:hidden", buttonVariants({ variant: "outline" }))}><MenuIcon /></span>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div>
                    <ul class="flex flex-col space-y-8">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/projects">Projects</a>
                        </li>
                        <li>
                            <a href="/blog">Blog</a>
                        </li>
                        <li>
                            <a href="/docs/resume.pdf" class={buttonVariants({ variant: "default" })}>Resume</a>
                        </li>
                        <li
                            class="bg-transparent border rounded-lg dark:border-gray-700"
                        >
                            <form action="/search" class="flex flex-wrap justify-between md:flex-row">
                                <input
                                    type="search"
                                    name="query"
                                    placeholder="Search..."
                                    required
                                    class="flex-1 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
                                />

                                <button
                                    type="submit"
                                    class="flex items-center justify-center w-full p-2 m-1 dark:bg-gray-800 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-10 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            stroke-line-cap="round"
                                            stroke-line-join="round"
                                            stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </button>
                            </form>
                        </li>
                    </ul>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav;