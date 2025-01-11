import PublicHeader from "@/components/public/Header";
import LandingPageBody from "@/components/public/MainContent";
import TrendPage from "./TrendPage";
import TrendCard from "@/components/public/Trend";
import PreviewStoryPage from "./PreviewStory";

function LandingPage() {
  return (
    <>
      <PublicHeader />
      <LandingPageBody />
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
        <div></div>
      </PreviewStoryPage>
    </>
  );
}

export default LandingPage;
