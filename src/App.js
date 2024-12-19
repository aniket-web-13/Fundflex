import {Navbar} from "./components/navbar/navbar.js";
import {Header} from "./components/header/header.js";
import {Brands} from "./components/brands/brands.js";
import {Features} from "./components/features/features.js";
import { Gains } from "./components/gains/gains.js";
import { Management } from "./components/management/management.js";
import { Testimoni } from "./components/testimoni/testimoni.jsx";
import {Faq} from "./components/faq/faq.jsx"



function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Brands />
      <Features />
      <Gains />
      <Management />
      <Testimoni />
      <Faq />
    </>
  );
}

export default App;
