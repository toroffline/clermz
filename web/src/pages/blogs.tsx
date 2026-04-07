import { useEffect, useState } from "preact/hooks";
import BlogItem from "../components/blogItem";
import { useCollection } from "../hooks/useCollection";
import { ArticleAttributes } from "../types/article";

export function Blogs(_props: any) {
  const collection = useCollection();
  const [articles, setArticles] = useState<ArticleAttributes[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data } = await collection.getArticles();
        setArticles(data.map((item) => item.attributes));
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <>
      <section>
        <h1>Blogs</h1>
        <p>Welcome to my blogs! Here, I share my thoughts, experiences, and insights on various topics that interest me. From technology and programming to personal development and lifestyle, you'll find a mix of articles that reflect my passions and curiosities.</p>
        <p>Feel free to explore, comment, and share your thoughts. I hope you find something that resonates with you!</p>
        <p>Happy reading!</p>
      </section>

      <section>
        {articles.map((article, index) => (
          <BlogItem key={article.slug ?? index} attributes={article} />
        ))}
      </section>
    </>
  );
}
