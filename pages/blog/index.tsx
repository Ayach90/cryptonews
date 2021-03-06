import Layout from "src/Layout";
import Archive from "src/components/Archive";
import { Post } from "src/types";

type Props = {
  posts: Post[];
  totalPages: number;
};

export default function Blog({ posts, totalPages }: Props) {
  return (
    <Layout
      title="Blog - CryptosNews"
      description="Most recent news and all you need to know about cryptos"
    >
      <Archive posts={posts} totalPages={totalPages} />
    </Layout>
  );
}

export async function getStaticProps() {
  const resPosts = await fetch(
    `https://cryptosnews.angelayach.com/wp-json/wp/v2/posts`
  );
  const posts = await resPosts.json();

  const totalPages = resPosts.headers.get("x-wp-totalpages");
  return { props: { posts, totalPages }, revalidate: 600 };
}
