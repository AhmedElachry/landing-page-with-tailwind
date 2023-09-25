import NewsLetterImg from "../../assets/newsLetterImg.png";
import NewsEx1 from "../../assets/newsEx1.svg";
import NewsEx2 from "../../assets/newsEx2.svg";

const NewsLetter = () => {
  return (
    <div>
      <header>Subscribe newsletter</header>
      <p>
        Businesses generally promote their brand, products, and services by
        identifying audience. No wonder that promotion strategy is one of the
        most important processes in marketing.
      </p>
      <form>
        <input type="email" />
        <input type="submit" value="Subscribe" />
      </form>
      <div>
        <img src={NewsEx1} />
        <img src={NewsEx2} />
        <img src={NewsLetterImg} />
      </div>
      <hr />
    </div>
  );
};

export default NewsLetter;
