import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Menu />
      <main className="flex flex-wrap justify-between p-5 gap-5">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;