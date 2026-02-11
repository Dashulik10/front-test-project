import Header from "../../components/layout/Header/Header.tsx";
import Hero from "../../components/sections/Hero/Hero.tsx";
import Destinatinations from "../../components/Destinations/Destinations.tsx";
import HomePageStyles from "./HomePage.module.css"

const HomePage = () => {
  return (
    <>
      <Header />
      <main className={HomePageStyles.main}>
        <Hero />
          <Destinatinations />
      </main>
    </>
  );
};

export default HomePage;