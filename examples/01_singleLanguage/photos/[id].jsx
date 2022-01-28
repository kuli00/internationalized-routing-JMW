import { getAllPhotos, getPhotoById } from '../../fetcher';

const Photo = ({ id, title, url }) => (
  <>
    <h1>
      Photo #{id} - {title}
    </h1>
    <img src={url} />
  </>
);

export const getStaticPaths = async () => {
  const photos = await getAllPhotos();

  return {
    paths: photos.splice(0, 200).map(singlePhoto => ({
      params: {
        id: singlePhoto.id.toString(),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const photo = await getPhotoById(params.id);

  return {
    props: photo,
  };
};

export default Photo;
