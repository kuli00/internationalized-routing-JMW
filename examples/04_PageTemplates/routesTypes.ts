interface Routes {
  [path: string]: {
    page: string;
    query?: { [key: string]: string | number | boolean };
  };
}

const exampleRoutes: Routes = {
  '/': {
    page: '/HomePage', // ścieżka rozpoczynająca się w katalogu /pages
  },

  '/posts/1': {
    page: '/Post',
    query: { id: 1 },
  },
};

export default exampleRoutes;
