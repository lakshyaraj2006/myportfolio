import { Badge } from "./ui/badge";
import { buttonVariants } from "./ui/button";

const ProjectCard = ({ title, tagline, slug, tags, created, author }) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-64 object-cover object-top"
        src="/images/default.jpg"
        alt={title}
      />
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
                  <Badge key={tag} variant="default" className="cursor-pointer">
                    {tag}
                  </Badge>
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
