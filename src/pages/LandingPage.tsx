import LandingHeader from "@/components/public/Header";
import LandingPageBody from "@/components/public/MainContent";
import Trend from "./Trend";
import AuthModal from "@/components/public/AuthModal";

function LandingPage() {
  return (
    <>
      <LandingHeader />
      <LandingPageBody />;
      <AuthModal />
      <Trend />
    </>
  );
}

export default LandingPage;
