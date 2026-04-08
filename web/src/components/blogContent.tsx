import { route, type RoutableProps } from "preact-router";
import { useEffect, useState } from "preact/hooks";
import { useBlogCollection } from "../hooks/useBlogCollection";
import MarkdownContent from "./markdownContent";

type BlogContentProps = RoutableProps & {
  slug?: string;
};

export function BlogContent(props: BlogContentProps) {
  const collection = useBlogCollection();
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const slug = props.slug;
    console.log({ slug });

    if (!slug) {
      route("/blogs");
      return;
    }

    const fetchBlog = async () => {
      try {
        const result = await collection.getBlogContentBySlug(slug);
        console.log({ result });
        const data = result;

        setBlog(data?.attributes ?? null);
      } catch (error) {
        console.error("Failed to fetch blog detail:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [props.slug]);

  if (loading) return <p>Loading...</p>;
  if (!blog) return <p>Blog not found.</p>;

  return (
    <article>
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
      <small>{blog.publishedAt}</small>
      <MarkdownContent content={blog.content} />
      <p>{blog.category?.data?.attributes?.name}</p>
    </article>
  );
}
