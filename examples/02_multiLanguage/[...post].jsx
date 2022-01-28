import { pages } from '../config';
import { getAllPosts, getPostById } from '../fetcher';

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
        post: [pages.posts[process.env.LANGUAGE], singlePost.id.toString()],
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostById(params.post[1]);

  return {
    props: post,
  };
};

export default Post;
