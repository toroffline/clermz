import { route } from "preact-router";
import { BlogsAttributes } from "../types/blog";

const BlogItem = (props: { attributes: BlogsAttributes }) => {
  const { attributes } = props;
  const { title, description, category, slug } = attributes;
  const { name: categoryName } = category.data.attributes;

  return (
    <div className="blog-item" onClick={() => route(`/blog/${slug}`)}>
      <div className="blog-item-info">
        <h4 className="blog-item-title">
          <BlogType type={categoryName} />
          {title}
        </h4>
        <p>{description}</p>
        <div className="blog-item-published-at">{new Date(attributes.createdAt).toLocaleDateString()}</div>
      </div>
      <div className="blog-item-react">
        <span className="blog-item-react-icon">Read more</span>
      </div>
    </div>
  );
};

const BlogType = (props: { type: string }) => {
  const { type } = props;
  const icon = {
    workout: "🏋🏻‍♂️",
    food: "🍽️",
    coding: "💻",
    travel: "✈️",
    lifestyle: "🌱",
  }[type];

  return <span className="blog-item-type">{icon}</span>;
};

export default BlogItem;
