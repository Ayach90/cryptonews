import Layout from "src/Layout";
import { Boxed } from "src/Layout/styles";
import { Post } from "src/types";

type Props = {
  post: Post;
};
const Post = ({ post }: Props) => {
  const { title, content, excerpt } = post[0];

  return (
    <Layout title={title.rendered} description={excerpt}>
      <Boxed>
        <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
      </Boxed>
    </Layout>
  );
};

export default Post;

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://cryptosnews.angelayach.com/wp-json/wp/v2/posts?slug=${params.slug}`
  );
  const post = await res.json();
  return { props: { post } };
}

export async function getStaticPaths() {
  const res = await fetch(
    `https://cryptosnews.angelayach.com/wp-json/wp/v2/posts?per_page=100`
  );
  const posts = await res.json();
  const paths = [];

  posts.map((post) => {
    paths.push({ params: { slug: post.slug } });
  });
  return {
    paths,
    fallback: false,
  };
}
