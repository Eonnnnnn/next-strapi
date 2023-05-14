import Head from 'next/head';
import Nav from './Nav';
import { UserProvider } from '../lib/authContext';

// Layout component
const Layout = ({ user, loading = false, children }) => (
  <UserProvider value={{ user, loading }}>
    {/* Head section */}
    <Head>
      <title>Midterm Project</title>
    </Head>

    {/* Navigation */}
    <Nav />

    {/* Main content */}
    <main className="px-4">
      <div
        className="
          flex
          justify-center
          items-center
          bg-white
          mx-auto
          w-2/4
          rounded-lg
          my-16
          p-16
        "
      >
        <div className="text-2xl font-medium">{children}</div>
      </div>
    </main>
  </UserProvider>
);

export default Layout;
