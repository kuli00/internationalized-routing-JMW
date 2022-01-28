import '../src/global-style.css';

import Link from 'next/link';

import { links } from '../src/navigation.const';

const MyApp = ({ Component, pageProps }) => (
  <>
    <nav>
      {links.map(({ href, label }) => (
        <Link href={href} key={href}>
          <a>{label}</a>
        </Link>
      ))}
    </nav>
    <Component {...pageProps} />
  </>
);

export default MyApp;
