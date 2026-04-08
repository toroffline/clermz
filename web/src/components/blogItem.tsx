import { route } from "preact-router";
import { BlogAttributes } from "../types/blog";

const BlogItem = (props: { attributes: BlogAttributes }) => {
  const { attributes } = props;
  console.log({ attributes });
  const { title, description, slug, category } = attributes;
  const { name: categoryName } = category.data.attributes;

  return (
    // <div className="blog-item" onClick={() => route(linkUrl)}>
    <div className="blog-item">
      <div className="blog-item-info">
        <h4 className="blog-item-title">
          <BlogType type={categoryName} />
          {/* {thumbnail && <img src={thumbnail} alt={title} className="blog-item-thumbnail" />} */}
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
