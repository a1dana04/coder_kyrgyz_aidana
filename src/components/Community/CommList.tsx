import { FaTelegramPlane } from "react-icons/fa";
import { SiWebmoney } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const CommunityList = ({ data }: { data: any }) => {
  const devkg = data?.[0]?.devkg || [];
  const telegram_chats = data?.[0]?.telegram_chats || [];
  const telegram_channels = data?.[0]?.telegram_channels || [];
  const websites = data?.[0]?.websites || [];
  const facebook = data?.[0]?.facebook || [];
  const youtube = data?.[0]?.youtube || [];
  const github = data?.[0]?.github || [];

  return (
    <>
      <div className="community--telegram">
        <h1>Наши ресурсы в Telegram</h1>
        <div className="community--telegram__blocks">
          {telegram_channels.map(
            (item: { label: string; value: string }, index: number) => (
             <Link to={`${item.value}`}>
              <div className={`community--telegram__blocks--block `}>
                <span>
                  <FaTelegramPlane />
                </span>
                <p>{item.label}</p>
              </div>
             </Link>
            )
          )}
        </div>
      </div>
      <div className="community--telegram">
        <h1>Телеграм чаты</h1>
        <div className="community--telegram__blocks">
          {telegram_chats.map(
            (item: { label: string; value: string }, index: number) => (
             <Link to={`${item.value}`}>
              <div className={`community--telegram__blocks--block `}>
                <span>
                  <FaTelegramPlane />
                </span>
                <p>{item.label}</p>
              </div>
             </Link>
            )
          )}
        </div>
      </div>
      <div className="community--telegram">
        <h1>Телеграм каналы</h1>
        <div className="community--telegram__blocks">
          {devkg.map(
            (item: { label: string; value: string }, index: number) => (
              <Link to={item.value}>
              <div className={`community--telegram__blocks--block `}>
                <span>
                  <FaTelegramPlane />
                </span>
                <p>{item.label}</p>
              </div>
              </Link>
            )
          )}
        </div>
      </div>
      <div className="community--telegram">
        <h1>Веб-сайты</h1>
        <div className="community--telegram__blocks">
          {websites.map(
            (item: { label: string; value: string }, index: number) => (
             <Link to={item.value}>
              <div
                className={`community--telegram__blocks--block `}
                style={{ background: "#6fcf97" }}
              >
                <span>
                  <SiWebmoney />
                </span>
                <p>{item.label}</p>
              </div>
             </Link>
            )
          )}
        </div>
      </div>
      <div className="community--telegram">
        <h1>Facebook</h1>
        <div className="community--telegram__blocks">
          {facebook.map(
            (item: { label: string; value: string }, index: number) => (
             <Link to={item.value}>
              <div
                className={`community--telegram__blocks--block `}
                style={{ background: "#3b5998" }}
              >
                <span>
                  <FaFacebookSquare />
                </span>
                <p>{item.label}</p>
              </div>
             </Link>
            )
          )}
        </div>
      </div>
      <div className="community--telegram">
        <h1>YouTube</h1>
        <div className="community--telegram__blocks">
          {youtube.map(
            (item: { label: string; value: string }, index: number) => (
             <Link to={item.value}>
              <div
                className={`community--telegram__blocks--block `}
                style={{ background: "red" }}
              >
                <span>
                  <FaYoutube />
                </span>
                <p>{item.label}</p>
              </div>
             </Link>
            )
          )}
        </div>
      </div>
      <div className="community--telegram">
        <h1>GitHub</h1>
        <div className="community--telegram__blocks">
          {github.map(
            (item: { label: string; value: string }, index: number) => (
              <Link to={item.value}>
              <div
                className={`community--telegram__blocks--block `}
                style={{ background: "#262626" }}
              >
                <span>
                  <FaGithubAlt />
                </span>
                <p>{item.label}</p>
              </div>
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default CommunityList;
