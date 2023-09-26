import GlobalCommunicationImg from "../../assets/GlobalCommunicationImg.png";

const GlobalCommunication = () => {
  return (
    <div className="flex flex-col items-center py-[110px] ">
      <header className=" text-[28px] md:text-[45px] font-medium md:font-bold text-primary mb-[20px] ">
        Global promotion
      </header>
      <p className="text-center leading-7 max-w-[764px] text-paragraph mb-[70px]">
        Businesses generally promote their brand, products, and services by
        identifying audience. No wonder that promotion strategy is one of the
        most important processes in marketing.
      </p>
      <img src={GlobalCommunicationImg} />
      <hr />
    </div>
  );
};

export default GlobalCommunication;
