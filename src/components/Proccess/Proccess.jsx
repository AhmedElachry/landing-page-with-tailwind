import box from "../../assets/box.svg";
import calendar from "../../assets/calendar.svg";
import statistics from "../../assets/statistics.svg";

const Proccess = () => {
  return (
    <div className="container mx-auto py-[110px] flex flex-col gap-[70px]">
      <section className="flex items-center  gap-1 flex-col">
        <header className="font-bold text-[22.5px] md:text-[45px] text-primary leading-[55px]">
          How it works
        </header>
        <p className="text-paragraph text-center md:max-w-[431px]">
          Businesses generally promote their brand, products, and services by
          identifying audience.
        </p>
      </section>
      <div className="flex gap-8">
        <section className="rounded-xl border-[rgba(6, 6, 64, 1)] border-2 max-w-[370px] max-h-[308px] p-8">
          <div className=" w-[70px] h-[70px] bg-section1-bg rounded-xl flex justify-center items-center">
            <img src={box} />
          </div>

          <header>Choose packages</header>
          <p>
            Businesses generally promote their brand, products, and services by
            identifying audience or users.
          </p>
        </section>
        <section className="rounded-xl  max-w-[370px] max-h-[308px] bg-white p-7  shadow-[0_30px_50px_0px_rgba(3,3,37,0.04)]">
          <div className=" w-[70px] h-[70px] bg-section1-bg rounded-xl flex justify-center items-center">
            <img src={calendar} />
          </div>

          <header>Schedule appointment</header>
          <p>
            When you have important information to pass onto your people, text
            messaging can be a great way to do it.
          </p>
        </section>
        <section className="rounded-xl border-[rgba(6, 6, 64, 0.04)] border-2 max-w-[370px] max-h-[308px] p-8">
          <div className=" w-[70px] h-[70px] bg-section1-bg rounded-xl flex justify-center items-center">
            <img src={statistics} />
          </div>

          <header>Grow together</header>
          <p>
            Texting can sometimes come across as an impersonal way to
            communicate, it can be highly beneficial.
          </p>
        </section>
      </div>
      <hr />
    </div>
  );
};

export default Proccess;
