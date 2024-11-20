import  Header from "./components/header";
import  Footer from "./components/footer";
import Hero from "./components/hero";
import Stories from "./components/stories";
import BoxIcon from "./components/icon";
import Faq from "./components/faq";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Stories />
      <BoxIcon />
      <Faq/>
      <Footer />
    </div>
  );
}
