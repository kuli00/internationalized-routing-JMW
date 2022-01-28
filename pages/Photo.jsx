import { getPhotoById } from '../fetcher';

const Photo = ({ id, title, url }) => (
  <>
    <h1>
      Photo #{id} - {title}
    </h1>
    <img src={url} />
  </>
);

Photo.getInitialProps = async ({ query }) => getPhotoById(query.id);

export default Photo;
