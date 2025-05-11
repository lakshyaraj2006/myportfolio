import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PostCard from "@/components/PostCard";
import type { InferEntrySchema, RenderedContent } from "astro:content";

const SearchResults = (
    { projects, posts, query }:
        {
            projects: { id: string; body?: string; collection: "projects"; data: InferEntrySchema<"projects">; rendered?: RenderedContent; filePath?: string }[],
            posts: { id: string; body?: string; collection: "blogs"; data: InferEntrySchema<"blogs">; rendered?: RenderedContent; filePath?: string }[],
            query: string
        }
) => {
    return (
        <Tabs defaultValue="projects">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="blogs">Blogs</TabsTrigger>
            </TabsList>
            <TabsContent className="p-4" value="projects">
                {projects.length !== 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id ?? project.data.slug}
                                title={project.data.title}
                                tagline={project.data.tagline}
                                tags={project.data.tags}
                                slug={project.data.slug}
                                thumbnail={project.data.thumbnail}
                                author={project.data.author}
                                created={project.data.created}
                            />
                        ))}
                    </div>
                )}
                {projects.length === 0 && (
                    <div className="prose dark:prose-invert">
                        <h1 className="text-4xl font-bold">
                            No search results found for "{query}"
                        </h1>
                    </div>
                )}
            </TabsContent>
            <TabsContent className="p-4" value="blogs">
                {posts.length !== 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post) => {
                            return <PostCard
                                key={post.id ?? post.data.slug}
                                title={post.data.title}
                                tagline={post.data.tagline}
                                tags={post.data.tags}
                                slug={post.data.slug}
                                thumbnail={post.data.thumbnail}
                                author={post.data.author}
                                created={post.data.created}
                            />;
                        })}
                    </div>
                )}
                {posts.length === 0 && (
                    <div className="prose dark:prose-invert">
                        <h1 className="text-4xl font-bold">
                            No search results found for "{query}"
                        </h1>
                    </div>
                )}
            </TabsContent>
        </Tabs>
    )
}

export default SearchResults;