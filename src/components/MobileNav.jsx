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
                    </ul>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav;