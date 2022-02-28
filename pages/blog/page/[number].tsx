import Layout from "src/Layout";
import Archive from "src/components/Archive";
import { Post } from "src/types";

type Props = { posts: Post[]; totalPages: number; currentPage: number };

const Number = ({ posts, totalPages, currentPage }) => {
  return (
    <Layout
      title="Blog - CryptoNews"
      description="Most recent news and all you need to know about cryptos"
    >
      <Archive
        posts={posts}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </Layout>
  );
};

export default Number;

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://cryptosnews.angelayach.com/wp-json/wp/v2/posts?page=${params.number}`
  );
  const posts = await res.json();
  const totalPages = res.headers.get("x-wp-totalpages");
  return { props: { posts, totalPages, currentPage: params.number } };
}

export async function getStaticPaths() {
  const res = await fetch(
    `https://cryptosnews.angelayach.com/wp-json/wp/v2/posts`
  );
  const posts = await res.json();
  const totalPages = res.headers.get("x-wp-totalpages");
  const paths = [];
  let i = 1;
  while (i <= parseInt(totalPages)) {
    if (i > 1) {
      paths.push({
        params: { number: i.toString() },
      });
    }
    i++;
  }
  return {
    paths,
    fallback: false,
  };
}
