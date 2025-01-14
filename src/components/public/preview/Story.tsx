import BookMarkSvg from "@/components/svg/BookMarkSvg";
import ClapSvg from "@/components/svg/ClapSvg";
import CommentSvg from "@/components/svg/CommentSvg";
import DislikeSvg from "@/components/svg/DislikeSvg";
import ShowMoreSvg from "@/components/svg/ShowMoreSvg";
import "@/styles/common/story.scss";

const Story = () => {
  return (
    <>
      <a className="story" href="#">
        <div className="story-content">
          <div className="story-content__body">
            <div className="story__author-info">
              <picture className="story__author-info-picture">
                <img src="/assets/images/test_img.png" />
              </picture>
              <p>kelvin okoye</p>
            </div>
            <div className="story-topic">
              <h2>
                The 5 paid subscriptions I actually use in 2025 as a Staff
                Software Engineer
              </h2>
              <p className="">Tools I use that are cheaper than Netflix</p>
            </div>

            <div className="story-footer">
              <div className="story-footer__left">
                <p className="date-posted">19 dec 2021</p>
                <div className="clap">
                  {/* <button> */}
                  <ClapSvg />
                  {/* </button> */}
                  <span className="clap__count">40</span>
                </div>

                <div className="comment">
                  <CommentSvg />
                  <span className="comment__count">50</span>
                </div>
              </div>

              <div className="story-footer__right">
                <div className="dislike">
                  <button>
                    <DislikeSvg />
                  </button>
                </div>

                <div className="bookmark">
                  <button>
                    <BookMarkSvg />
                  </button>
                </div>

                <div className="show-more">
                  <button>
                    <ShowMoreSvg />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <picture className="story-picture">
            <img src="/assets/images/laptop_img.png" />
          </picture>
        </div>
      </a>
    </>
  );
};

export default Story;
