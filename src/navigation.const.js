import { pages } from '../config';

export const links = [
  {
    href: '/',
    label: 'Home',
  },
  ...new Array(5).fill(null).map((_, key) => ({
    href: `/${pages.posts[process.env.LANGUAGE]}/${key + 1}/`,
    label: `Post #${key + 1}`,
  })),
  ...new Array(5).fill(null).map((_, key) => ({
    href: `/${pages.photos[process.env.LANGUAGE]}/${key + 1}/`,
    label: `Photo #${key + 1}`,
  })),
];
