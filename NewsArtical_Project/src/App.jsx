import "./App.css";
import { Category } from "./component/Category";
import { Footer } from "./component/Footer";
import { Navbar } from "./component/Navbar";
import { News } from "./component/Pages/News";

function App() {
  return (
    <>
      <Navbar className="sticky top-0 z-30" />
      <Category className="py-10 sticky top-10 bg-base-200 z-20" />
      <News className="pb-10" />
      <Footer />
    </>
  );
}

export default App;
