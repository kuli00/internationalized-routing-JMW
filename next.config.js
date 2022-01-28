/** @type {import('next').NextConfig} */

const { pages } = require('./config');
const { getAllPosts, getAllPhotos } = require('./fetcher');
module.exports = {
  trailingSlash: true,
  env: {
    LANGUAGE: process.env.LANGUAGE,
  },
  exportPathMap: async () => {
    const routes = {
      '/': {
        page: '/HomePage',
      },
    };

    const {
      photos: { [process.env.LANGUAGE]: photosRoute },
      posts: { [process.env.LANGUAGE]: postsRoute },
    } = pages;

    const posts = await getAllPosts();
    const photos = await getAllPhotos();

    posts.forEach(({ id }) => {
      routes[`/${postsRoute}/${id}`] = {
        page: '/Post',
        query: { id },
      };
    });

    photos.forEach(({ id }) => {
      routes[`/${photosRoute}/${id}`] = {
        page: '/Photo',
        query: { id },
      };
    });

    return routes;
  },
};
