import PublicHeader from "@/components/public/auth/Header";
import HeroSection from "@/pages/public/HeroSection";
import TrendPage from "./TrendPage";
import TrendCard from "@/components/public/Trend";
import PreviewStoryPage from "./PreviewStoryPage";
import PreviewStoryIntro from "@/components/public/preview/PreviewStoryIntro";
import MainContent from "@/components/public/preview/MainContent";
import Story from "@/components/public/preview/Story";

function LandingPage() {
  return (
    <>
      <PublicHeader />
      <HeroSection />
      <TrendPage>
        <TrendCard trendNo={1} />
        <TrendCard trendNo={2} />
        <TrendCard trendNo={3} />
        <TrendCard trendNo={4} />
        <TrendCard trendNo={5} />
        <TrendCard trendNo={6} />
        <TrendCard trendNo={7} />
      </TrendPage>
      <PreviewStoryPage>
        <PreviewStoryIntro />
        <MainContent>
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
        </MainContent>
      </PreviewStoryPage>
    </>
  );
}

export default LandingPage;
