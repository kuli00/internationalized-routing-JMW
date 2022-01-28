import { getPostById } from '../fetcher';

const Post = ({ id, title, body }) => (
  <>
    <h1>
      Post #{id} - {title}
    </h1>
    <p>{body}</p>
  </>
);

Post.getInitialProps = async ({ query }) => getPostById(query.id);

export default Post;
