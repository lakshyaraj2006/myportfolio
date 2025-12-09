import { Badge } from "./ui/badge";
import { buttonVariants } from "./ui/button";

const ProjectCard = (
  { title, tagline, thumbnail, slug, tags, created, author }: 
  { title: string, tagline: string, thumbnail: string | undefined, slug: string, tags: string, created: string, author: string }
) => {
  return (
    <div className="shadow-lg overflow-hidden border rounded">
      <div className="relative w-full h-auto mx-h-64">
        <img
          className="w-full h-full object-cover"
          src={thumbnail ? thumbnail : "/images/default.webp"}
          alt={title}
        />
      </div>
      <div className="p-4">
        <p className="mb-2">{author} &bull; {created}</p>
        <h2 className="text-xl font-semibold mb-2 dark:text-white">{title}</h2>
        <div className="flex flex-wrap gap-2 my-2">
          {
            tags
              .replace(/\s/g, "")
              .split(",")
              .map((tag) => {
                return (
                  <a href={`/projects?tagged=${tag}`}>
                    <Badge key={tag} variant="default" className="cursor-pointer">
                      {tag}
                    </Badge>
                  </a>
                );
              })
          }
        </div>
        <p className="mb-4 dark:text-gray-400">{tagline}</p>
        <a
          href={`/projects/${slug}`}
          className={buttonVariants({ variant: "secondary" })}
        >
          Read More
        </a>
      </div>
    </div>
  )
}

export default ProjectCard;
