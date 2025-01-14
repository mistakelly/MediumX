import "@/styles/public/trend.scss";
import { BasePageProps } from "@/utils/interface";
import { FC } from "react";

const TrendPage: FC<BasePageProps> = ({ children }) => {
  return (
    <section className="trend-section">
      <main className="container">
        <div className="trend-header">
          <h1 className="trend-header__title">Trending on MediumX</h1>
          <p className="trend-header__desc">
            Discover trending stories from writers on any topic
          </p>
        </div>

        <div className="trend-card-container">{children}</div>
        <div className="arrow">
          <div className="right-arrow"> ❱ </div>
          <div className="left-arrow"> ❰</div>
        </div>
      </main>
    </section>
  );
};

export default TrendPage;
