import PublicHeader from "@/components/public/Header";
import LandingPageBody from "@/components/public/MainContent";
import Trend from "./Trend";
import { SignUp } from "@/components/public/auth/SignUp";
// import { SignIn, SignUp } from "@/components/public/AuthModal";

function LandingPage() {
  return (
    <>
      <PublicHeader />
      <LandingPageBody />;
      <Trend />
    </>
  );
}

export default LandingPage;
