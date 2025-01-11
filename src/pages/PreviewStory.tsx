import { BasePageProps } from "@/utils/interface";
import { FC } from "react";
import "@/styles/public/preview-story.scss";

const PreviewStoryPage: FC<BasePageProps> = ({ children }) => {
  return (
    <div className="preview-story">
      <div className="container">
        <div className="preview-story__intro">
          <h1>Inside the Blog: Exclusive stories and interviews.</h1>
          <p>
            Subscribe to stay updated on the latest articles, blogging tips, and
            content inspiration.
          </p>

          <form action="" method="post">
            <input
              name="email"
              type="email"
              placeholder="Enter your email..."
            />
            <button>Subscribe Now</button>
          </form>
        </div>
        {children}
      </div>
    </div>
  );
};

export default PreviewStoryPage;
