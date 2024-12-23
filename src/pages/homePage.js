import {Navbar} from "../components/navbar/navbar.js"
import {Header} from "../components/header/header.js"
import {Brands} from "../components/brands/brands.js"
import {Features} from "../components/features/features.js"
import {Gains} from "../components/gains/gains.js"
import {Management} from "../components/management/management.js"
import {Testimoni} from "../components/testimoni/testimoni.jsx"
import {Faq} from "../components/faq/faq.jsx"
import { Experience } from "../components/experience/experience.jsx"
import { Footer } from "../components/footer/footer.jsx"

function Home() {
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
          <Experience />
          <Footer />
        </>
      );
}
export default Home;