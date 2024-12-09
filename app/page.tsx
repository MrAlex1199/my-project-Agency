import  Header from "./components/Home/header";
import  Footer from "./components/Home/footer";
import Hero from "./components/Home/hero";
import Stories from "./components/Home/stories";
import BoxIcon from "./components/Home/icon";
import Faq from "./components/Home/faq";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Stories />
      <BoxIcon />
      <Faq />
      <Footer />
    </div>
  );
}
