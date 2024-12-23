import { Navbar } from "../components/navbar/navbar";
import { Faq } from "../components/faq/faq.jsx";
import { Experience } from "../components/experience/experience.jsx";
import { Footer } from "../components/footer/footer.jsx";
import { PlanSec } from "../components/planSec/planSec.jsx";

function PricingPage() {
  return (
    <>
      <Navbar />
      <PlanSec />
      <Faq />
      <Experience />
      <Footer />
    </>
  );
}
export default PricingPage;
