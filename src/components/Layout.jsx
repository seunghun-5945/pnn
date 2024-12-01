import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ Main }) => {
  return (
    <>
    <Header />
    <Main />
    <Footer />
    </>
  );
};

export default Layout;