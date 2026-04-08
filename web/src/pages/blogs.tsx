import { useEffect, useState } from "preact/hooks";
import BlogItem from "../components/blogItem";
import { BlogsAttributes } from "../types/blog";
import { useBlogCollection } from "../hooks/useBlogCollection";

export function Blogs(_props: any) {
  const collection = useBlogCollection();
  const [blogs, setBlogs] = useState<BlogsAttributes[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await collection.getBlogs();
        setBlogs(data.map((item) => item.attributes));
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <section>
        <h1>Blogs</h1>
        <p>Welcome to my blogs! Here, I share my thoughts, experiences, and insights on various topics that interest me. From technology and programming to personal development and lifestyle, you'll find a mix of blogs that reflect my passions and curiosities.</p>
        <p>Feel free to explore, comment, and share your thoughts. I hope you find something that resonates with you!</p>
        <p>Happy reading!</p>
      </section>

      <section>
        {blogs.map((article, index) => (
          <BlogItem key={article.slug ?? index} attributes={article} />
        ))}
      </section>
    </>
  );
}
