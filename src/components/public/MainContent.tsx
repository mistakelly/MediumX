import "@/styles/public/main.scss";
import homeImage from "@/assets/images/home_image.webp";

function LandingPageBody() {
  return (
    <main className="main">
      <section className="main__intro">
        <h1 className="main__title">Human</h1>
        <h1 className="main__title">stories & ideas</h1>
        <p className="main__paragraph">
          Your go-to platform for insightful stories and thought leadership
        </p>
        <button className="main__cta">Start Reading...</button>
      </section>

      <picture className="main__picture">
        <img src={homeImage} alt="" />
      </picture>
    </main>
  );
}

export default LandingPageBody;
