import { pages } from '../config';
import {
  getAllPhotos,
  getAllPosts,
  getPhotoById,
  getPostById,
} from '../fetcher';

const Page = ({ pageType, pageProps }) => {
  switch (pageType) {
    case 'post':
      return (
        <>
          <h1>
            Post #{pageProps.id} - {pageProps.title}
          </h1>
          <p>{pageProps.body}</p>
        </>
      );
    case 'photo':
      return (
        <>
          <h1>
            Photo #{pageProps.id} - {pageProps.title}
          </h1>
          <img src={pageProps.url} />
        </>
      );
    default:
      return null;
  }
};

export const getStaticPaths = async () => {
  const posts = await getAllPosts();
  const photos = await getAllPhotos();

  return {
    fallback: false,
    paths: [
      ...posts.map(singlePost => ({
        params: {
          page: [pages.posts[process.env.LANGUAGE], singlePost.id.toString()],
        },
      })),
      ...photos.splice(0, 200).map(singlePhoto => ({
        params: {
          page: [pages.photos[process.env.LANGUAGE], singlePhoto.id.toString()],
        },
      })),
    ],
  };
};

export const getStaticProps = async ({ params }) => {
  const [path, id] = params.page;

  switch (path) {
    case pages.posts[process.env.LANGUAGE]:
      const post = await getPostById(id);

      return {
        props: {
          pageType: 'post',
          pageProps: post,
        },
      };
    case pages.photos[process.env.LANGUAGE]:
      const photo = await getPhotoById(id);

      return {
        props: {
          pageType: 'photo',
          pageProps: photo,
        },
      };
  }
};

export default Page;
