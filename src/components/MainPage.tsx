import ExploreSection from "./MainContent/ExploreSection";
import MyMusicSection from "./MainContent/MyMusicSection";
import NewsSection from "./MainContent/NewsSection";
import RadioEpisodes from "./MainContent/RadioEpisodes";

const MainPage = () => {
  return (
    <>
      <NewsSection />
      <RadioEpisodes />
      <MyMusicSection />
      <ExploreSection />
    </>
  );
};

export default MainPage;
