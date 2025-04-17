import BlogItem from "../components/blogItem";

export function Blogs(_props: any) {
  const blogDetails = [{
    title: 'How I build self esteem by working out',
    thumbnail: null,
    topicType: 'workout',
    shortDesc: 'โม้ไปเร่ยยยยยย',
    linkUrl: '/blogs/workout/1'
  }];

  return <>
    <section>
      <h1>Blogs</h1>
      <p>Welcome to my blog! Here, I share my thoughts, experiences, and insights on various topics that interest me. From technology and programming to personal development and lifestyle, you'll find a mix of articles that reflect my passions and curiosities.</p>
      <p>Feel free to explore, comment, and share your thoughts. I hope you find something that resonates with you!</p>
      <p>Happy reading!</p>
    </section>

    <section>
      {blogDetails.map((blogDetail: any) => <BlogItem detail={blogDetail} />)}
    </section>
  </>;
}
