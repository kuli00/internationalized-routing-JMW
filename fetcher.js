const getAllPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
};

const getAllPhotos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos');
  const allPhotos = await response.json();
  return allPhotos.slice(0, 50);
};

const getPostById = async id => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  return response.json();
};

const getPhotoById = async id => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${id}`,
  );
  return response.json();
};

module.exports = { getAllPhotos, getPhotoById, getPostById, getAllPosts };
