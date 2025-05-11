import { Badge } from "./ui/badge";
import { buttonVariants } from "./ui/button";

const PostCard = (
  { title, tagline, slug, thumbnail, tags, created, author }:
  { title: string, tagline: string, slug: string, thumbnail: string | undefined, tags: string, created: string, author: string }
) => {
  return <div className="shadow-lg overflow-hidden border rounded">
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
                <Badge key={tag} variant="default" className="cursor-pointer">
                  {tag}
                </Badge>
              );
            })
        }
      </div>
      <p className="mb-4 dark:text-gray-400">{tagline}</p>
      <a href={`/blog/${slug}`} className={buttonVariants({ variant: "secondary" })}>
        Read More
      </a>
    </div>
  </div>
}

export default PostCard;