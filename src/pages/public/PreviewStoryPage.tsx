import { BasePageProps } from "@/utils/interface";
import { FC } from "react";
import "@/styles/public/preview-story.scss";

const PreviewStoryPage: FC<BasePageProps> = ({ children }) => {
  return (
    <div className="preview-story">
      <div className="container">{children}</div>
    </div>
  );
};

export default PreviewStoryPage;

