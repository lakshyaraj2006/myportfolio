import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PostCard from "@/components/PostCard";

const SearchResults = ({ projects, posts, query }) => {
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
                            <ProjectCard key={project.id ?? project.data.slug} {...project.data} />
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
                            return <PostCard key={post.id ?? post.data.slug}  {...post.data} />;
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