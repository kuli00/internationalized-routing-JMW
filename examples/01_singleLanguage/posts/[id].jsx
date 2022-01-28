import { getAllPosts, getPostById } from '../../fetcher';

const Post = ({ id, title, body }) => (
  <>
    <h1>
      Post #{id} - {title}
    </h1>
    <p>{body}</p>
  </>
);

export const getStaticPaths = async () => {
  const posts = await getAllPosts();

  return {
    paths: posts.map(singlePost => ({
      params: {
        id: singlePost.id.toString(),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostById(params.id);

  return {
    props: post,
  };
};

export default Post;
