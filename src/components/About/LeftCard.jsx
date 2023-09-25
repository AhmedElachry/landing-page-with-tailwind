import shield from "../../assets/shield.svg";
import rating from "../../assets/rating.svg";
const LeftCard = () => {
  return (
    <div>
      <header>About us</header>
      <p>
        No wonder that promotion strategy is one of the most important processes
        in marketing. In fact, it supports your marketing voices to reach your
        target audience, creates interest, and helps you to engage with them.
      </p>
      <div>
        <section>
          <img src={shield} />
          <header>Safe and secured</header>
          <p>
            Safe and secured promotion strategy is one of the most important
            processes in marketing.
          </p>
        </section>
        <section>
          <img src={rating} />
          <header>Highly expert team</header>
          <p>
            We supports your marketing voices to reach your target audience,
            creates interest.
          </p>
        </section>
      </div>
    </div>
  );
};

export default LeftCard;
