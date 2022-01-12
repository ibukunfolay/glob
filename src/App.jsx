import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Strips from "./Components/Strips";
import Youtube from "./Components/Youtube";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Cards />
      <Youtube />
      <Strips />
      <Footer />
    </div>
  );
};

export default App;
