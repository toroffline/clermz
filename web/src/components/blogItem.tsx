import { route } from "preact-router";

const BlogItem = (props: { detail: any }) => {
    const { detail } = props;
    const { title, thumbnail, shortDesc, linkUrl } = detail;

    return <div className="blog-item" onClick={() => route(linkUrl)}>
        <div className="blog-item-info">
            <h3 className="blog-item-title">
                <BlogType type={detail.topicType} />
                {thumbnail && <img src={thumbnail} alt={title} className="blog-item-thumbnail" />}
                {title}
            </h3>
            <p>{shortDesc}</p>
        </div>
        <div className="blog-item-react">
            <span className="blog-item-react-icon">Read more</span>
        </div>
    </div>;
}

const BlogType = (props: { type: string }) => {
    const { type } = props;
    const icon = {
        workout: '🏋🏻‍♂️',
        food: '🍽️',
        coding: '💻',
        travel: '✈️',
        lifestyle: '🌱'
    }[type];

    return <span className="blog-item-type">{icon}</span>;
}

export default BlogItem;